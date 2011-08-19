/**
 * AgentLogin Application AgentLoginForm
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.AgentLogin.application.views
 * @author      Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.agentLogin.application.views.AgentLoginForm = Ext.extend(Ext.form.FormPanel, {

    url: null,
    border:false,
    
    initComponent: function() {

        this.url = 'kebab/agent-login';

        this.comboStore = new KebabOS.applications.agentLogin.application.models.UserDataStore({
            bootstrap:this.bootstrap,
            autoLoad: true
            
        });
        
        var userCombobox = new Kebab.library.ext.AutocompleteComboBox({
            tpl:'<tpl for="."><div ext:qtip="{fullName}" class="x-combo-list-item">{fullName} - {email}</div></tpl>',
            fieldLabel:'Kullanıcı e-postası',
            emptyText:'Ad soyad veya e-posta adresi yazınız.',
            typeAhead: true,
            allowBlank:false,
            triggerAction: 'all',
            forceSelection: true,
            lazyRender:false,
            mode: 'remote',
            store: this.comboStore,
            valueField: 'id',
            displayField: 'email',
            hiddenName: 'userId',
            scope:this
        });

        var config = {
            items:[{
                    xtype:'panel',
                    layout: 'form',
                    border:false,
                    frame:true,
                    defaultType: 'textfield',
                    bodyStyle: 'padding:5px 10px;',
                    labelAlign: 'top',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [userCombobox,
                    {
                        fieldLabel:'Yönetici şifresi',
                        name: 'password',
                        allowBlank:false,
                        inputType: 'password'
                    },{
                        fieldLabel:'Güvenlik kodu',
                        name: 'secureKey',
                        allowBlank:false,
                        inputType: 'password'
                    }]
                }],
            buttons: [{
                text: 'Login',
                iconCls: 'icon-accept',
                scope:this,
                handler : this.onSubmit
            }]
        };

        this.addEvents('agentLoginEvent');

        Ext.apply(this, Ext.apply(this.initialConfig, config));
        
        KebabOS.applications.agentLogin.application.views.AgentLoginForm.superclass.initComponent.apply(this, arguments);
    },

    onSubmit: function() {
        this.fireEvent('agentLoginEvent',{from:this, url:this.url});
    }
});
