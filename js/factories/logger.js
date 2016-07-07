'use strict';

(function () {
angular.module('inventory').factory('API', function($http){

    function getBlogs(){
        var ajaxRequest = $http({
          method: 'GET',
          headers:
          {
            X_CSRF_TOKEN: 'N5JGY3RWWTW51XZTYVSN',
          },
          url: 'https://tiyagencyweek.herokuapp.com/blogs'
          });

        return ajaxRequest;
    }

    function saveBlog(formData){
        var ajaxRequest = $http({
          method: 'POST',
          data:formData,
          headers:
          {
            X_CSRF_TOKEN: 'N5JGY3RWWTW51XZTYVSN',
          },
          url: 'https://tiyagencyweek.herokuapp.com/blogs/create'
          });

        return ajaxRequest;
    }
	

  	return {
    	getBlogs: getBlogs,
        saveBlog: saveBlog,
  	};
})
})();