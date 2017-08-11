/**
 * Created by Administrator on 2017/8/11.
 */
"use strict";
angular.module("app").directive("appSheet",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            visible:'=',
            select:'&',
        },
        templateUrl:'view/template/sheet.html',
        link:function($scope){
            // $scope.select=function(){
            //
            // }
        }
    }
}])
