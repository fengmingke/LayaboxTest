(function()
{
    var Sprite = Laya.Sprite;
    var Stage  = Laya.Stage;
    var WebGL  = Laya.WebGL;
    var sp;
    (function()
    {
        console.log(WebGL);
        //初始化舞台
        Laya.init(500, 300, WebGL);
        drawSomething();
    })();
    function drawSomething()
    {
        sp = new Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(10, 58, 167, 58, "#ff0000", 5);
        //画折线
        sp.graphics.drawLines(20, 88, [0, 0, 39, -50, 78, 0, 120, -50],  "#ff0000", 5);
    }
})();