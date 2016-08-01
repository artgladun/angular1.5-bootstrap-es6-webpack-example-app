
class SuppliersResource {
    constructor($resource) {
        this.$resource = new $resource(
            'http://test-api.kuria.tshdev.io/', null
        ) 
    }
    getSuppliers(filters = {}) {
        console.log(filters)
        return this.$resource.get(filters).$promise.then((data) => {
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

SuppliersResource.$inject = ['$resource']

export default SuppliersResource