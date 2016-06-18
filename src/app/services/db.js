export class DBService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;

        this.data = $http({
            method: 'GET',
            url: 'assets/data.json'
        });
    }

    // returns a promise
    getData() {
        return this.data;
    }
}
