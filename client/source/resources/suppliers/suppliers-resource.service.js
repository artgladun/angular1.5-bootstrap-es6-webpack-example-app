
class SuppliersResource {
    constructor($q, $resource) {
        this.$q = $q
        this.$resource = new $resource(
            'http://test-api.kuria.tshdev.io/', null
        ) 
    }
    getSuppliers(filters = {}) {
        return this.$resource.get(filters).$promise.then((data) => {
            console.log(data)
            // ?! An error occured in body when status is 200?!
            // unnecessary code if api would be better
            if(data.payments && data.pagination) {   
                return {data: data}
            } 
            return {
                data: {
                    payments: [],
                    pagination: null
                } 
            } 
        })
    }
}

SuppliersResource.$inject = ['$q', '$resource']

export default SuppliersResource