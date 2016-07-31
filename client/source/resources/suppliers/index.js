import angular from 'angular'
import SuppliersResource from './suppliers-resource.service'

var suppliersResources = angular.module('app.resources.suppliers', [])
.service('SuppliersResource', SuppliersResource)
.name

export default suppliersResources