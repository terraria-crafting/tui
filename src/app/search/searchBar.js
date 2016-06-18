class SearchController {
    constructor($log, dbService) {
        'ngInject';
        this.$log = $log;
        this.dbService = dbService;

        this.dbService.getData().then(resp => {
            this.data = resp.data.items;
        }, resp => {
            this.$log.error(`Failed to load data: ${resp}`);
        });

        this.selectedItem = null;
    }

    lucky() {
        this.$log.debug('Lucky');
    }
}

export const searchBar = {
    controller: SearchController,
    templateUrl: 'app/search/searchBar.html'
};
