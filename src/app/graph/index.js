import angular from 'angular';

import {craftGraph} from './graph';

export const graphModule = 'graph';

angular.module(graphModule, [])
    .component('tcGraph', craftGraph);
