(function() {
    'use strict';
    
    angular
    .module('todos')
    //function to create new item and push to list
    .controller('MainController', function ToDoItem(API) {
       var vm = this
       //array that allows items to filter through
        vm.data = [];

        if(API.getStorage() !==null)
        {
            vm.data = API.getStorage();
        }

        //on submit, item gets pushed up to list
        vm.submit = function(){
            var newObj = {"item" : vm.form.item, "isComplete" : false};
                vm.data.push(newObj);
            //automatically clears input when new item is pushed up    
            vm.form = [];
            API.setStorage(vm.data);
        }

        //function to delete an item 
        vm.deleteItem = function(item) { 
            var index = vm.data.indexOf(item);
            vm.data.splice(index, 1);
            API.setStorage(vm.data);
            }
        
        // vm.checkOff = function(item) { 
            vm.checkOff = function(item){
                if(item.isComplete === false){
                    item.isComplete = true;
                }
                else if(item.isComplete === true){
                    item.isComplete = false;
                }
                API.setStorage(vm.data);
            }

        //function to clear completed
        vm.clearAll = function() {
            var doneToDo = vm.data;
            vm.data = [];
                angular.forEach(doneToDo, function(item) {
                    if (!item.isComplete) vm.data.push(item);
                })
                API.setStorage(vm.data);
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
        vm.activeTabItems = function activeTabItems(x) {
            console.log(activeTabItems);
            vm.active = x;            
       }

    })
})();