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
            var newObj = {"item" : vm.form.item};
                vm.data.push(newObj);
            //automatically clears input when new item is pushed up    
            vm.form = [];
        }

        //function to delete an item 
        vm.deleteItem = function(item) { 
            var index = vm.data.indexOf(item);
            vm.data.splice(index, 1);
            }
        
        vm.checkOff = function(item) { console.log(item);
            //vm.check = false;  
            if(vm.data === false) {
                vm.data = true; 
            }
        } 
    })
})();