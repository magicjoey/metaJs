/**
 * <p>JS双向数据绑定.</p>
 * @author Magic Joey @MetaStudio
 * @version metaJs.java 1.0 Created@2015-06-16 23:06 $
 */
"use strict";
(function(){

    var document = window.document;

    var element = "element", originalValue = "originalValue";

    //数据绑定对象
    var dataBind = {
            //结构为:bindData:{"bindKey":[{"element":"ele","originalValue":"val"},{"element":"ele2","originalValue":"val2"}...]}
        bindData:{},

        relate:function(bindRule, value) {
           var target = this.bindData[bindRule];
            console.log(target)
           if(target){
               for(var i= 0,len = target.length;i<len;i++){
                   var origData = target[i][originalValue];
                   target[i][element].innerHTML = origData.replace(bindRule,value);
               }

           }
        }

        },
        bind=function(eve){
           var attrName = this.getAttribute(bindAttrName);
           var value = this.value;
           //搜索页面内容，与页面中包含该值的上层元素建立绑定关系
           var rule = bindRule(attrName);//待绑定值
           var rightContent = document.querySelector("#rightContent");
           //var childs = rightContent.childNodes;
           findElement(rightContent,rule);
            dataBind.relate(rule,value);
        },

        bindRule=function(attrName){
            return "{{"+attrName+"}}";
        },
        findElement = function(parentEle, valRule){
            //console.log(parentEle)

            if(parentEle.childNodes.length==1&&parentEle.childNodes[0].nodeType===3){
                var val = parentEle.innerHTML;

                if(val && val.indexOf(valRule) >-1 ){

                    if(!dataBind.bindData[valRule]){
                        dataBind.bindData[valRule] = [];
                    }
                     var singleData = {
                        originalValue:val,
                        element : parentEle
                    }
                    dataBind.bindData[valRule].push(singleData);
                    console.log(dataBind);
                }
                return;
            }
            var nodes = parentEle.childNodes;
            //console.log(nodes)
            for(var i= 0, len = nodes.length;i<len;i++){
                findElement(nodes[i],valRule);
            }
        },
    //input要绑定的初始值
    bindAttrName = "mt-bind-value",
    //页面初始化方法
    init = function(evt){
       var inputs = document.querySelectorAll("input");
        for( var i = 0 , len = inputs.length ; i < len ; i++ ){


            var currentEle = inputs[i];
            var initValue = currentEle.getAttribute(bindAttrName);
            if(initValue) {
                //用旧版ie的早点洗洗睡吧
                currentEle.addEventListener("change", bind, false);
            }
        }
    };

    window.onload=init();


})();