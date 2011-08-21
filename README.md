# Overview

This bundle help user who has right to login for and other user without know their password. The user should be know secret
keyword and his own password.

# Requirements

* Kebab 1.5.0.beta1

# How to install

**Copy files**

* Copy modules/agent folder to /applications/modules/agent
* Copy applications/administration/ folter to /web/assets/kebab/applications/administration

**Setup database**

* Concat doctrine data files where /development/doctrine/data/fixtures/*.yml to same files on kebab project
* Run `doctrine.php rebuild-db` then `doctrine.php load-data`

**Setup Restfull Route**

* If you use restfull controller, you must add `'agent' => array('agent')` to _initRestRoute() method at application/bootstrap.php 


# Development

## Team

1. [Onur Özgür ÖZKAN](http://www.onurozgurozkan.com)
1. [Yunus ÖZCAN](https://github.com/yunusozcan)