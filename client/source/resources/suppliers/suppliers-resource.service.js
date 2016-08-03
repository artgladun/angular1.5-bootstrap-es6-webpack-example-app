
class SuppliersResource {
    constructor($q, $resource) {
        this.$q = $q
        this.$resource = new $resource(
            'http://test-api.kuria.tshdev.io/', null
        ) 
    }
    getSuppliers(filters = {}) {
        return this.$q.resolve({data: 
            {"payments":[{"payment_supplier":"ANCHOR TRUST","payment_ref":"499599","payment_cost_rating":"1","payment_amount":"674.80"},{"payment_supplier":"ANCHOR TRUST","payment_ref":"500394","payment_cost_rating":"3","payment_amount":"3053.84"},{"payment_supplier":"ANCHOR TRUST","payment_ref":"500395","payment_cost_rating":"5","payment_amount":"15650.00"},{"payment_supplier":"ANDREWS WASTE MANAGEMENT","payment_ref":"500396","payment_cost_rating":"2","payment_amount":"1222.22"},{"payment_supplier":"AQUADITION LTD","payment_ref":"1141260","payment_cost_rating":"1","payment_amount":"528.75"}],"pagination":{"total":50,"current":"2","links":{"0":"page=0","1":"page=1","2":"page=2","3":"page=3","4":"page=4","5":"page=5","6":"page=6","7":"page=7","8":"page=8","49":"page=49"},"from":0,"to":9,"left":true,"right":true,"leftEnd":false,"rightEnd":true}}    
        })

        // return this.$resource.get(filters).$promise.then((data) => {
        //     // ?! An error occured in body when status is 200?!
        //     // unnecessary code if api would be better
        //     if(data.payments && data.pagination) {   
        //         return {data: data}
        //     } 
        //     return {
        //         data: {
        //             payments: [],
        //             pagination: null
        //         } 
        //     } 
        // })
    }
}

SuppliersResource.$inject = ['$q', '$resource']

export default SuppliersResource