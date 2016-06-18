class GraphController {
    /** @ngInject */
    constructor($log) {
        this.$log = $log;

        $log.debug('GraphController CTOR');
    }
}

export const craftGraph = {
    controller: GraphController,
    templateUrl: 'app/graph/graph.html'
};
