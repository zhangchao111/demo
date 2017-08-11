/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/position_class.html',
        link:function($scope){
           $scope.showPositionList=function(idx){
               //console.log(idx);
                $scope.positionList=$scope.com.positionClass[idx].positionList;
               $scope.isActive = idx;
            }
            $scope.$watch('com',function(newVal){
                if(newVal)$scope.showPositionList(0)
            })
        }
    }
}])