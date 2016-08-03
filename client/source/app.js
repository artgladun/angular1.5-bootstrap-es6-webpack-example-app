import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngResource from 'angular-resource'
import uiRouter from 'angular-ui-router'
import AppComponent from './app.component'
import Common from './common/common'
import Components from './components/components'
import Resources from './resources/resources'
import CONFIG from './config'

const root = angular.module('app', [
    ngAnimate,
    ngResource,
    uiRouter,
    Components,
    Resources
])
.component('app', AppComponent)
.value('EventEmmiter', payload => ({ $event: payload }))
.constant('CONFIG', CONFIG)
.config(($compileProvider, $locationProvider, $urlRouterProvider) => {
    
    $compileProvider.debugInfoEnabled(false)
    $locationProvider.html5Mode(true)    
    $urlRouterProvider.otherwise('/suppliers')
})
.name

export default root