import controller from './suppliers-modal-details.controller'
import templateUrl from './suppliers-modal-details.component.html'

//definitely - it could be more genereic if more modals would be opened in this app
const dialogFactory = ($uibModal, CONFIG) => {
    return {
        open: (data = {}) => {
            data = Object.assign({}, data)

            return $uibModal.open({
                animation: CONFIG.animationsEnabled,
                controllerAs: '$ctrl',
                bindToController: true,
                size: 'sm',
                controller,
                templateUrl, 
                resolve: {
                    supplier: () => data
                }
            })
        }
    }
} 

export default dialogFactory