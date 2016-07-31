import angular from 'angular'
import Suppliers from './suppliers'

var resources = angular.module('app.resources', [
    Suppliers
]).name

export default resources