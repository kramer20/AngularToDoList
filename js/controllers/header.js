(function() {
    'use strict';
    angular
        .module('inventory')
        .controller('HeaderController',function(API) {

        	var vm = this;

        	retrieveBlogs();

        	function retrieveBlogs(){
	        	var blogs = API.getBlogs();

	        	blogs.then(function(results){
	        		vm.blogs = results.data.blogs;
	        	})
        	};


        	vm.saveBlog = function(){
        		var saveBlog = API.saveBlog(vm.form);

        		saveBlog.then(function(results){
        			console.log(results);
        			retrieveBlogs();
        		})
        	}

    });
})();