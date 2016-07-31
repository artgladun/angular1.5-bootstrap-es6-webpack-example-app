
class SuppliersResource {
    constructor($q, $resource) {
        this.$q = $q
        this.$resource = new $resource(
            'url', null
        ) 
    }

    getSuppliers(filters = {}) {
        return this.$q.resolve([])
    }
}

SuppliersResource.$inject = ['$q', '$resource']

export default SuppliersResource