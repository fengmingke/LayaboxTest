(function()
{
      var Sprite = Laya.Sprite;
    var Texture = Laya.Texture;
      var Handler = Laya.Handler;
      var Res;
    var img;
    (function()
    {
            Laya.init(1136,640);
            //设置舞台背景色
            Laya.stage.bgColor = "#ffffff"      
            //资源路径
            Res = "../laya/assets/images/Jellyfish.jpg";        
            //先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
            Laya.loader.load(Res,Handler.create(this,graphicsImg));   
        })();
        function graphicsImg()
        {
            img = new Sprite();
            Texture = Laya.loader.getRes(Res);
            //获取图片资源，绘制到画布
            img.graphics.drawTexture(Texture,150,50);
            //添加到舞台
            Laya.stage.addChild(img);

            //创建遮罩对象
            var cMask = new Sprite();
            //画一个圆形的遮罩区域
            cMask.graphics.drawCircle(80,80,150,"#ff0000");
              //圆形所在的位置坐标
            cMask.pos(400,200);
             //实现img显示对象的遮罩效果
            img.mask = cMask;
        }
})();

