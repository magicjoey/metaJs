/**
 * <p>JS双向数据绑定.</p>
 * @author Magic Joey @MetaStudio
 * @version metaJs.java 1.0 Created@2015-06-16 23:06 $
 */
//严格模式,检查错误
"use strict";
(function(){
    //间接引用,提高性能
    var document = window.document;
    //数据绑定对象
    var dataBind = {
        callBacks:{},

        //bind:function(){
        //
        //},


        },
        bind=function(eve){
           var val = this.getAttribute(attrName);
           //搜索页面内容，与页面中包含该值的上层元素建立绑定关系

        },
        bindRule=function(val){
            return "{{"+val+"}}";
        },
    //input要绑定的初始值
    attrName = "mts-bind-value";
    //页面初始化方法
    init = function(evt){
       var inputs = document.querySelectorAll("input");
        for( var i = 0 , len = inputs.length ; i < len ; i++ ){
            var currentEle = inputs[i];
            var initValue = currentEle.getAttribute(attrName);
            if(initValue) {
                //用旧版ie的早点洗洗睡吧
                currentEle.addEventListener("change", bind, false);
            }
        }
    };

    window.onload(function(){
        init();
    });


})();