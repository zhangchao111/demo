/**
 * Created by Administrator on 2017/8/2.
 */
'use strict';
angular.module("app").directive("appHeadBar",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            text:'@',
        },
        link:function($scope,element,attr){
            $scope.back=function(){
                window.history.back();
            }
            //测试 接收处理向下广播的函数
            $scope.$on("abc",function(event,data){
                    console.log(event,data)
            })
            //测试 向上广播
            $scope.$emit("cba",{id:2});
        }

    }
}])