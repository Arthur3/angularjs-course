'use strict';

import angular from 'angular';
import config from './index.config';
import appComponents from './components';
import uiRouter from 'angular-ui-router';

const app = angular.module('mailbox', [uiRouter]);

config(app);
appComponents(app);