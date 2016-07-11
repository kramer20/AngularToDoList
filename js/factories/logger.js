// (function () {
// 	'use strict';
// 	angular
// 		.module('todos')
// 		 .controller('MainController', function(API) {

// 		 	var vm = this;

// 		 	getListItems();

// 		 	function getListItems(){
// 		 		var items = API.retrieveItems();

// 		 		blogs.then(function(results){
// 		 			vm.items = resluts.data.items;
// 		 		})
// 		 	};

// 		 	vm.submit = function(){
// 		 		var submit = API.submit(vm.form);

// 		 		submit.then(function(results){
// 		 			console.log(results);
// 		 			getListItems();
// 		 		})
// 		 	}

// 		 });
// })();