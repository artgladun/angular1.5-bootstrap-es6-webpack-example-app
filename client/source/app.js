import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngResource from 'angular-resource'
import uiRouter from 'angular-ui-router'
import AppComponent from './app.component'
import Components from './components/components'
import CONFIG from './config'

const root = angular.module('app', [
    ngAnimate,
    ngResource,
    uiRouter,
    Components
])
.component('app', AppComponent)
.constant('CONFIG', CONFIG)
.config(($locationProvider, $urlRouterProvider) => {
    
    $locationProvider.html5Mode(true)    
    $urlRouterProvider.otherwise('/')
})
.name

export default root