var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var maskDemoUI=(function(_super){
		function maskDemoUI(){
			

			maskDemoUI.__super.call(this);
		}

		CLASS$(maskDemoUI,'ui.maskDemoUI',_super);
		var __proto__=maskDemoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(maskDemoUI.uiView);

		}

		maskDemoUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":-113,"x":-224,"skin":"images/Jellyfish.jpg"},"child":[{"type":"Sprite","props":{"y":298,"x":229,"renderType":"mask"},"child":[{"type":"Circle","props":{"y":48,"x":79,"radius":111,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]};
		return maskDemoUI;
	})(View);