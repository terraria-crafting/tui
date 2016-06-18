import angular from 'angular';

import {DBService} from './db';

export const servicesModule = 'services';

angular
    .module(servicesModule, [])
    .service('dbService', DBService);
