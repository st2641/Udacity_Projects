function myCtrl($scope) {
	$scope.activeTabs = [ ];//initiate array//

	 $scope.isOpenTab = function (tab) {//check if the tab is active
		if ($scope.activeTabs.indexOf(tab) > 0) {//check if this tab is already in the activeTabs array
			return true;
			}//End first condition
			else {
			return false;
		}//end else
	}//end isOpenSec();

	$scope.openTab = function (tab) {//function to 'open' a tab
		//check if tab is already open
		if ($scope.isOpenTab(tab)) {
			$scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);//if it is, remove it from the activeTabs array
		}
		else {//if not, add it!
			$scope.activeTabs.push(tab);
			}//End else
	}//End openSec();
}//End app.controller