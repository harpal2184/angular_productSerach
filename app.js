var app = angular.module('financeApp',[]);
app.controller('financeCtrl', function($scope, $http){
	var productNameAry = [];
	$http.get('model/products.json').success(function(response){
		$scope.data = response.products;
		for(var i in $scope.data){
			productNameAry.push($scope.data[i].name);
		}
		$scope.productData = productNameAry;
		console.log($scope.data);

	});
	$scope.highlightText = function(){
		$scope.search = '';
		inputHandler = function()
	}
	
	
});