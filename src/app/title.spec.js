import angular from 'angular';
import 'angular-mocks';
import {
    title
} from './title';

describe('title component', () => {
    beforeEach(() => {
        angular
            .module('tcTitle', ['app/title.html'])
            .component('tcTitle', title);
        angular.mock.module('tcTitle');
    });

    it('should render Search and ye shall find!', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<tc-title></tc-title>')($rootScope);
        $rootScope.$digest();
        const title = element.find('h1');
        expect(title.html().trim()).toEqual('Search and ye shall find!');
    }));
});
