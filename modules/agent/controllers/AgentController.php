<?php 
/**
 * Kebab Project
 *
 * LICENSE
 *
 * This source file is subject to the  Dual Licensing Model that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.kebab-project.com/cms/licensing
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@lab2023.com so we can send you a copy immediately.
 *
 *
 * @category   Kebab
 * @package    Modules
 * @subpackage Controller
 * @author     Onur Özgür ÖZKAN <onur.ozgur.ozkan@lab2023.com>
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/cms/licensing
 * @version    1.5.0
 */
 
/**
 * Agent Bundle 
 *
 * @category   Kebab
 * @package    Modules
 * @subpackage Controller
 * @author     Onur Özgür ÖZKAN <onur.ozgur.ozkan@lab2023.com>
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/cms/licensing
 * @version    1.5.0
 */
class Agent_AgentController extends Kebab_Rest_Controller
{
    /**
     * Login
     * 
     * @return void
     */
    public function postAction()
    {
        // Get params
        $p              = $this->_helper->param();
        $response       = $this->_helper->response();
        $adminId        = Zend_Auth::getInstance()->getIdentity()->id;
        $adminPassword  = Doctrine_Core::getTable('Model_Entity_User')->find($adminId)->password;
        $validation     = true;


        // Validation
        if (md5($p['password']) != $adminPassword) {
            $response->addNotification(Kebab_Notification::ERR, 'Please check your password.', true);
            $validation = false;
        }

        $agentConfig = Zend_Registry::get('agentConfig');
        if ($p['secureKey'] != $agentConfig->securityKey) {
            $response->addNotification(Kebab_Notification::ERR, 'Please check your blowfish.', true);
            $validation = false;
        }

        if ($validation === false) {
            $response->setSuccess(false)->addNotification(Kebab_Notification::ERR, 'Operation was not performed.', true)->getResponse();
        }


        $userTable = Doctrine_Core::getTable('Model_Entity_User')->find($p['userId']);
        $hasIdentity = Kebab_Authentication::signIn($userTable->userName, $userTable->password, false, false);

        $auth = Zend_Auth::getInstance()->getStorage()->read();
        $auth->agent_id = (string) $adminId;
        Zend_Auth::getInstance()->getStorage()->clear();
        Zend_Auth::getInstance()->getStorage()->write($auth);

        // Response
        if ($hasIdentity) {
            $response->setSuccess(true)->getResponse();
        } else {
            $response->addNotification(Kebab_Notification::ERR, 'Some error occured. Please try later.', true)->getResponse();
        }
    }
}