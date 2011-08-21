/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.agentLogin.application.controllers
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.agentLogin.application.controllers.Index = Ext.extend(Ext.util.Observable, {

    // Application bootstrap
    bootstrap: null,

    constructor: function(config) {

        // Base Config
        Ext.apply(this, config || {});

        // Call Superclass initComponent() method
        KebabOS.applications.agentLogin.application.controllers.Index.superclass.constructor.apply(this, arguments);

        this.init();
    },

    // Initialize and define routing settings
    init: function() {
        this.bootstrap.layout.agentLoginForm.on('agentLoginEvent', this.formOnSaveAction, this);
    },

    // Actions -----------------------------------------------------------------

    formOnSaveAction: function(data) {

        if (data.from.getForm().isValid()) {

            data.from.getForm().submit({
                url: Kebab.helper.url(data.url),
                method: 'POST',

                success : function() {
                    Kebab.helper.message(this.bootstrap.launcher.text, 'Operation was performed successfully');
                    Kebab.helper.redirect('backend/desktop/')
                },

                failure : function() {
                    Kebab.helper.message(this.bootstrap.launcher.text, 'Operation was not performed', true);
                }, scope:this
            });
        }
    }
});
