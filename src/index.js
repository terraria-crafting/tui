import angular from 'angular';

import 'angular-ui-router';
import 'angucomplete-alt';

import {servicesModule} from './app/services/index';

import {graphModule} from './app/graph/index';
import {searchModule} from './app/search/index';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.less';
import './app/search/search.less';

angular
    .module('app', ['ui.router',
                    'angucomplete-alt',
                    servicesModule,
                    graphModule,
                    searchModule])
    .config(routesConfig)
    .component('app', main)
    .component('tcHeader', header)
    .component('tcTitle', title)
    .component('tcFooter', footer);
