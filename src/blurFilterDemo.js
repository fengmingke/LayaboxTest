//初始化舞台
Laya.init(1334,750,Laya.WebGL);
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
//原始位图
createImg(100,50);
//模糊滤镜
createBlurFilter();
/**创建位图**/
function createImg(w,h){
    var Img = new Laya.Sprite();
    //添加到舞台
    Laya.stage.addChild(Img);
    //加载显示图片，坐标位于100,50
    Img.loadImage("../laya/assets/images/10.jpg",w,h);
    return Img;
}
/**创建糊滤滤镜位图**/
function createBlurFilter(){
    //创建模糊滤镜实例
    var blurFilter = new Laya.BlurFilter();
    //设置模糊强度
    blurFilter.strength = 50;
    //在坐标280,50创建位图
    var img = createImg(280,50);
    //添加滤镜效果
    img.filters = [blurFilter];
}