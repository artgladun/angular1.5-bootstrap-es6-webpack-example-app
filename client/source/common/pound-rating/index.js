import angular from 'angular'
import PoundRatingComponent from './pound-rating.component'

const poundRating = angular.module('app.common.pound-rating', [])
.component('poundRating', PoundRatingComponent)
.name 

export default poundRating