/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/position_class.html',
    }
}])