
class SuppliersModalDetailsController {
    constructor($uibModalInstance, supplier) {
        this.$uibModalInstance = $uibModalInstance
        this.supplier = supplier
    }
    close() {
        this.$uibModalInstance.dismiss('cancel')
    }
}

SuppliersModalDetailsController.$inject = ['$uibModalInstance', 'supplier']

export default SuppliersModalDetailsController