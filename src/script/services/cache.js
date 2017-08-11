/**
 * Created by Administrator on 2017/8/10.
 */
"use strict";
angular.module("app")

    //service是直接调用返回这个函数 不弄定义私有属性
//     .service("cache",["$cookies",function($cookies){
//     this.put=function(key,value){
//           $cookies.put(key,value)
//     }
//     this.get=function(key){
//        return $cookies.get(key);
//     }
//     this.remove=function(key){
//         $cookies.remove(key)
//     }
// }])


//factory 是返回一个对象 可以定义一些私有属性，外部不可访问
    .factory("cache",["$cookies",function($cookies){
       return {
           put:function(key,value){
                $cookies.put(key,value);
           },
           get:function(key){
              return $cookies.get(key);
           },
           remove:function(key){
               $cookies.remove(key);
           }

       }
    }])
