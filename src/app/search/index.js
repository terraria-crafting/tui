import angular from 'angular';

import {searchBar} from './searchBar';

export const searchModule = 'search';

angular
    .module(searchModule, [])
    .component('tcSearch', searchBar);
