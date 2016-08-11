// 'use strict';

import angular from 'angular';
import config from './index.config';
import appComponents from './components';
import uiRouter from 'angular-ui-router';

import 'bootstrap-loader';
import './styles/main.css';

/* 
* UI Bootstrap components 
* https://github.com/angular-ui/bootstrap#webpack--jspm
*/
import dropdown from 'angular-ui-bootstrap/src/dropdown';

const app = angular.module('mailbox', [uiRouter, dropdown]);

config(app);
appComponents(app);

require('./favicon.ico');