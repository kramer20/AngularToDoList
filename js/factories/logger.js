(function () {
	'use strict';
	angular
		.module('todos')
		 .factory('API', function() {

		 	var vm = this;

		 	//set something to local storage

		 	function setStorage(data)
		 	{
		 		var data = JSON.stringify(data);
		 		localStorage.setItem('data',data);
		 	}

		 	//get something from local storage

		 	function getStorage()
		 	{
		 		var data = localStorage.getItem('data');
		 		data = JSON.parse(data);
		 		return data;
		 		
		 	}
		 	
		 	return {
		 		setStorage,
		 		getStorage		 
		 		}

		 });
})();