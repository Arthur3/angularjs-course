// 'use strict';

import angular from 'angular';
import config from './index.config';
import appComponents from './components';
import uiRouter from 'angular-ui-router';
import toastr from 'angular-toastr';

import 'bootstrap-loader';
import './styles/main.css';
import 'angular-toastr/dist/angular-toastr.css';

/* 
* UI Bootstrap components 
* https://github.com/angular-ui/bootstrap#webpack--jspm
*/
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import modal from 'angular-ui-bootstrap/src/modal';

const app = angular.module('mailbox', [uiRouter, dropdown, modal, toastr]);

config(app);
appComponents(app);

require('./favicon.ico');