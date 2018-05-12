(function() {
    'use strict';
    
    angular.module('app', [
    "ui.router"
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("users", {
    url: "/",
    templateUrl: "/views/users/create.html",
 controller: "userController"
 }).state("create", {
 url: "/create",
 templateUrl: "/views/users/create.html",
 controller: "userController"
 }).state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/users/create.html",
    controller: "userController"
    }).state("details", {
    url: "/details/:id",
    templateUrl: "/views/users/details.html",
    controller: "userController"
    });
    })
    .constant("globalConfig", {
        apiAddress: 'http://localhost:3000/api'
 });
})();