import angular from 'angular'
import PoundRatingComponent from './pound-rating.component.js'

const poundRating = angular.module('app.components.pound-rating', [])
.component('poundRating', PoundRatingComponent)
.name 

export default poundRating