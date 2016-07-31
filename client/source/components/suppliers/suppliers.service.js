
class SuppliersService {
    constructor(SuppliersResource) {
        this.SuppliersResource = SuppliersResource
    }

    getSuppliers() {
        return this.SuppliersResource.getSuppliers()
    }
}

SuppliersService.$inject = ['SuppliersResource']

export default SuppliersService