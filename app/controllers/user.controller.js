(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('userController', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams'];
    
    function Controller($scope, $rootScope, userService, $state, $stateParams) {
    $scope.users = [];
    
    if ($state.current.name == "users") {
    $rootScope.Title = "User Listing";
    userService.getUsers().then(function(res) {
    $scope.users = res.data;
    }).catch(function(err) {
    console.log(err);
    });
    
    $scope.deleteUser = function(id) {
    if (confirm('Are you sure to delete?')) {
    userService.deleteUser(id).then(function(res) {
    if (res.data == "deleted") {
    $state.go("users", {}, { reload: true });
    }
    }).catch(function(err) {
    console.log(err);
    });
    }
    };

    $scope.saveData = function(user) {
        if ($scope.userForm.$valid) {
            userService.createUser(user).then(function(res) {
                if (res.data == "created") {
                    $state.go("users", {}, { reload: true });
                }
                }).catch(function(err) {
                console.log(err);
                });
        userService.updateUser(user).then(function(res) {
        if (res.data == "updated") {
            $state.go("users", {}, { reload: true });
        }
        }).catch(function(err) {
        console.log(err);
        });
        }
        };
     
        $scope.getForEdit=function(id){
            userService.getUser(id).then(function(res) {
                $scope.user = res.data;
            }).catch(function(err){
                console.log(err)
            });
        };
     
    
   
    
    }
    }
   })();