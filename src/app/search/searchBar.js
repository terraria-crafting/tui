class SearchController {
    /** @ngInject */
    constructor($log) {
        this.$log = $log;

        $log.debug('SearchController CTOR');

        this.foo = 'Foo Bar';
    }

    lucky() {
        this.$log.debug('Lucky');
    }
}

export const searchBar = {
    controller: SearchController,
    templateUrl: 'app/search/searchBar.html'
};
