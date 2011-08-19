/**
 * agentLogin Application UserDataStore class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.agentLogin.application.models
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.agentLogin.application.models.UserDataStore = Ext.extend(Kebab.library.ext.RESTfulBasicDataStore, {

    bootstrap: null,

    restAPI: 'kebab/user',

    readerFields:[
        {name: 'id', type:'integer'},
        {name: 'email', type:'string'},
        {name: 'fullName', type:'string'}
    ]
});