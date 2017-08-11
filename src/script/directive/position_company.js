/**
 * Created by Administrator on 2017/8/9.
 */
"use strict";
angular.module("app").directive("appCompany",[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/position_company.html',
    }
}])

