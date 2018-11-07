
(function()
{
      var Loader = Laya.Loader;
      var Handler = Laya.Handler;
(function()
    {
            //初始化舞台
            Laya.init(1136,640);
            //设置舞台背景色
            Laya.stage.bgColor = "#ffffff"    
            //加载图集资源，加载成功后添加到舞台
            Laya.loader.load("res/atlas/ui.atlas",Handler.create(this,onLoaded));
        }})();
        function onLoaded()
        {
            var cMask = new maskDemoUI();
            Laya.stage.addChild(cMask);
        }
}})();