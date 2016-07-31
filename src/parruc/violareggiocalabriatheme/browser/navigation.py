# -*- coding: utf-8 -*-
from Acquisition import aq_inner
from plone.app.layout.navigation.root import getNavigationRoot
from plone.registry.interfaces import IRegistry
from Products.CMFCore.utils import getToolByName
from Products.CMFPlone import utils
from Products.CMFPlone.browser.interfaces import INavigationTabs
from Products.CMFPlone.browser.navigation import get_id
from Products.CMFPlone.browser.navigation import get_view_url
from Products.CMFPlone.interfaces import INavigationSchema
from Products.Five import BrowserView
from zope.component import getMultiAdapter
from zope.component import getUtility
from zope.interface import implementer


@implementer(INavigationTabs)
class CatalogNavigationTabs(BrowserView):

    def _getNavQuery(self, root_path=None):
                # check whether we only want actions
        registry = getUtility(IRegistry)
        navigation_settings = registry.forInterface(
            INavigationSchema,
            prefix="plone",
            check=False
        )
        customQuery = getattr(self.context, 'getCustomNavQuery', False)
        if customQuery is not None and utils.safe_callable(customQuery):
            query = customQuery()
        else:
            query = {}

        if not root_path:
            root_path = getNavigationRoot(self.context)
        query['path'] = {
            'query': root_path,
            'depth': 1
        }
        query['portal_type'] = [t for t in navigation_settings.displayed_types]
        query['sort_on'] = navigation_settings.sort_tabs_on
        if navigation_settings.sort_tabs_reversed:
            query['sort_order'] = 'reverse'
        else:
            query['sort_order'] = 'ascending'

        if navigation_settings.filter_on_workflow:
            query['review_state'] = navigation_settings.workflow_states_to_show

        query['is_default_page'] = False

        if not navigation_settings.nonfolderish_tabs:
            query['is_folderish'] = True

        return query

    def _formatData(self, item):
        mtool = getToolByName(self.context, 'portal_membership')
        member = mtool.getAuthenticatedMember().id

        def _get_url(item):
            if item.getRemoteUrl and not member == item.Creator:
                return (get_id(item), item.getRemoteUrl)
            return get_view_url(item)

        cid, item_url = _get_url(item)
        return {
            'name': utils.pretty_title_or_id(self.context, item),
            'id': item.getId,
            'url': item_url,
            'description': item.Description
        }

    def topLevelTabs(self, actions=None, category='portal_tabs'):
        context = aq_inner(self.context)
        registry = getUtility(IRegistry)
        navigation_settings = registry.forInterface(
            INavigationSchema,
            prefix="plone",
            check=False
        )
        catalog = getToolByName(context, 'portal_catalog')

        if actions is None:
            context_state = getMultiAdapter(
                (context, self.request),
                name=u'plone_context_state'
            )
            actions = context_state.actions(category)

        # Build result dict
        result = []
        # first the actions
        for actionInfo in actions:
            data = actionInfo.copy()
            data['name'] = data['title']
            result.append(data)

        # check whether we only want actions
        if not navigation_settings.generate_tabs:
            return result

        query = self._getNavQuery()

        rawresult = catalog.searchResults(query)

        #  now add the content to results
        for item in rawresult:
            if item.exclude_from_nav:
                continue
            data = self._formatData(item)
            sub_query = self._getNavQuery(item.getPath())
            sub_rawresult = catalog.searchResults(sub_query)
            data["children"] = []
            for sub_item in sub_rawresult:
                data["children"].append(self._formatData(sub_item))
            result.append(data)
        return result
