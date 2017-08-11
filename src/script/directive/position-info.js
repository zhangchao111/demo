/**
 * Created by Administrator on 2017/8/7.
 */
"use strict";
angular.module("app").directive("appPositionInfo",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
          isActive:'=',
            isLogin:'=',
            pos:'=',
        },
        templateUrl:'view/template/position-info.html',
        link:function(scope){
            scope.imagePath=scope.isActive?("image/star-active.png"):("image/star.png");
        }
    }
}])