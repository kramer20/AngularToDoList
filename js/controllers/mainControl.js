(function() {
    'use strict';
    
    angular
    .module('todos')
    //function to create new item and push to list
    .controller('MainController', function ToDoItem() {
       var vm = this
       //array that allows items to filter through
        vm.data = [];
        //on submit, item gets pushed up to list
        vm.submit = function(){
            var newObj = {"item" : vm.form.item, "isComplete" : false};
                vm.data.push(newObj);
            //automatically clears input when new item is pushed up    
            vm.form = [];
        }

        //function to delete an item 
        vm.deleteItem = function(item) { 
            var index = vm.data.indexOf(item);
            vm.data.splice(index, 1);
            }
        
        // vm.checkOff = function(item) { 
            vm.checkOff = function(item){
                if(item.isComplete === false){
                    item.isComplete = true;
                }
                else if(item.isComplete === true){
                    item.isComplete = false;
                }
            }

        //function to clear completed
        vm.clearAll = function() {
            var doneToDo = vm.data;
            vm.data = [];
                angular.forEach(doneToDo, function(item) {
                    if (!item.isComplete) vm.data.push(item);
                })
        }

        //function for items left in todo
        vm.remaining = function() {
            var amount = 0;
            angular.forEach(vm.data, function(item){
                amount += item.isComplete ? 0 :1;
                });
            
            return amount;
        }

        //function for viewing active todos in active box
        vm.activeTab = function() {
            angular.forEach(function(item){ 
                if (item.isComplete===false) {
                    
                   
                }

            })
        }

    })
})();