/**
 * Created by Administrator on 2017/8/11.
 */
"use strict";
angular.module("app").directive("appTab",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
          tabClick:'&',
        },
        templateUrl:'view/template/searchTab.html',
        link:function($scope){
            $scope.click=function(tab){
               console.log(tab)
                $scope.selectId=tab.id;
                $scope.tabClick(tab)
            }
            $scope.selectId='city';
        }
    }
}])