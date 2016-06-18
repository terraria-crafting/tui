import angular from 'angular';
import 'angular-mocks';
import {
    header
} from './header';

describe('header component', () => {
    beforeEach(() => {
        angular
            .module('tcHeader', ['app/header.html'])
            .component('tcHeader', header);
        angular.mock.module('tcHeader');
    });

    it('should render \'Fountain Generator\'', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<tc-header></tc-header>')($rootScope);
        $rootScope.$digest();
        const header = element.find('a');
        expect(header.html().trim()).toEqual('Terraria Crafting');
    }));
});
