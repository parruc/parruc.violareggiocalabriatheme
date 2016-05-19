# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from parruc.violareggiocalabriatheme.testing import PARRUC_VIOLAREGGIOCALABRIATHEME_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that parruc.violareggiocalabriatheme is properly installed."""

    layer = PARRUC_VIOLAREGGIOCALABRIATHEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if parruc.violareggiocalabriatheme is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'parruc.violareggiocalabriatheme'))

    def test_browserlayer(self):
        """Test that IParrucViolareggiocalabriathemeLayer is registered."""
        from parruc.violareggiocalabriatheme.interfaces import (
            IParrucViolareggiocalabriathemeLayer)
        from plone.browserlayer import utils
        self.assertIn(IParrucViolareggiocalabriathemeLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = PARRUC_VIOLAREGGIOCALABRIATHEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['parruc.violareggiocalabriatheme'])

    def test_product_uninstalled(self):
        """Test if parruc.violareggiocalabriatheme is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'parruc.violareggiocalabriatheme'))

    def test_browserlayer_removed(self):
        """Test that IParrucViolareggiocalabriathemeLayer is removed."""
        from parruc.violareggiocalabriatheme.interfaces import IParrucViolareggiocalabriathemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IParrucViolareggiocalabriathemeLayer, utils.registered_layers())
