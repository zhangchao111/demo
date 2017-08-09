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
        link:function(scope,element,attr){
            scope.back=function(){
                window.history.back();
            }
        }

    }
}])