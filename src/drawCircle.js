(function()
{
    var Sprite = Laya.Sprite;
    var Stage  = Laya.Stage;
    (function()
    {
        //初始化舞台
        Laya.init(500, 300);
        drawSomething();
    })();
    function drawSomething()
    {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //画圆
        // sp.graphics.drawCircle(80,80,50,"#ff0000");
        //画圆
        sp.graphics.drawPie(80,80,50,90,180,"#ff0000");
     }
})();