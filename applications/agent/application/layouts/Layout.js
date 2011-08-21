/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.agentLogin.application.layouts
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.agentLogin.application.layouts.Layout = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,

    layout: 'fit',
    border: false,

    initComponent: function() {

        this.agentLoginForm = new KebabOS.applications.agentLogin.application.views.AgentLoginForm({
            bootstrap: this.bootstrap
        });

        Ext.apply(this, {
            items: this.agentLoginForm
        });

        KebabOS.applications.agentLogin.application.layouts.Layout.superclass.initComponent.call(this);
    }
});
