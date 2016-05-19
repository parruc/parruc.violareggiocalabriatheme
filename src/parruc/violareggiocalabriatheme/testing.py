# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import parruc.violareggiocalabriatheme


class ParrucViolareggiocalabriathemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=parruc.violareggiocalabriatheme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'parruc.violareggiocalabriatheme:default')


PARRUC_VIOLAREGGIOCALABRIATHEME_FIXTURE = ParrucViolareggiocalabriathemeLayer()


PARRUC_VIOLAREGGIOCALABRIATHEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(PARRUC_VIOLAREGGIOCALABRIATHEME_FIXTURE,),
    name='ParrucViolareggiocalabriathemeLayer:IntegrationTesting'
)


PARRUC_VIOLAREGGIOCALABRIATHEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(PARRUC_VIOLAREGGIOCALABRIATHEME_FIXTURE,),
    name='ParrucViolareggiocalabriathemeLayer:FunctionalTesting'
)


PARRUC_VIOLAREGGIOCALABRIATHEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        PARRUC_VIOLAREGGIOCALABRIATHEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='ParrucViolareggiocalabriathemeLayer:AcceptanceTesting'
)
