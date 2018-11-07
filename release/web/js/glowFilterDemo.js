//初始化舞台
Laya.init(1334,750,Laya.WebGL);
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
//原始位图
createImg(100,50);
//发光滤镜
createGlowFilter();
//阴影滤镜
createShadeFilter();
/**创建位图**/
function createImg(w,h){
    var Img = new Laya.Sprite();
    //添加到舞台
    Laya.stage.addChild(Img);
    //加载显示图片，坐标位于100,50
    Img.loadImage("../laya/assets/images/10.jpg",w,h);
    return Img;
}
/**创建发光滤镜位图**/
function createGlowFilter(){
    //创建发光滤镜位图
    var glowFilter = new Laya.GlowFilter("#ff0000",15,0,0);
    //在坐标280,50创建位图
    var img = createImg(280,50);
    //添加发光滤镜
    img.filters = [glowFilter];
}
/**创建阴影滤镜位图**/
function createShadeFilter(){
    //创建阴影滤镜
    var glowFilter = new Laya.GlowFilter("#000000",8,8,8);
    //在坐标460,50创建位图
    var img = createImg(460,50);
    //添加阴影滤镜
    img.filters = [glowFilter];
}