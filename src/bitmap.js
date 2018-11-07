//初始化引擎,不支持WebGL时自动切换到Canvas
Laya.init(1200,800,Laya.WebGL);
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
var img = new Laya.Sprite();
//加载显示图片，坐标位于100,50
img.loadImage("../laya/assets/images/Penguins.jpg",0,0,0,0,new Laya.Handler(this,onLoaded));
function onLoaded(){
    console.log("Penguins.jpg");
    img.x = Laya.stage.width - img.width>>1;
    img.y = Laya.stage.height - img.height>>1;
}
//添加到舞台
Laya.stage.addChild(img);


//需要切换的图片资源路径
this.monkey1 = "../laya/assets/images/Desert.jpg";
this.monkey2 = "../laya/assets/images/Lighthouse.jpg";
//切换状态
this.flag = false;
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
this.img2 = new Laya.Sprite();
//显示绘制的图片
switchImg();
//侦听switchImg中图片区域的点击事件，触发后执行switchImg切换图片
this.img2.on(Laya.Event.CLICK,this,switchImg);
//添加到舞台
Laya.stage.addChild(img2);
function switchImg(){
    //清空图片
    this.img2.graphics.clear();
    //获得要切换的图片资源路径
    var imgUrl = (this.flag = !this.flag)? this.monkey1:this.monkey2;
    //加载显示图片，坐标位于100,50
    this.img2.loadImage(imgUrl, 0,0, 0,0,new Laya.Handler(this,onLoaded2));
}
function onLoaded2(){
    console.log("xxxxxxxx.jpg");
    img2.x = Laya.stage.width - img2.width>>1;
    img2.y = Laya.stage.height - img2.height>>1;
}


//需要切换的图片资源路径
this.monkey3 = "../laya/assets/images/Koala.jpg";
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
//先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
Laya.loader.load(this.monkey3,Laya.Handler.create(this,graphicsImg));
function graphicsImg(){
    var img = new Laya.Sprite();
    //获取图片资源，绘制到画布
    img.graphics.drawTexture(Laya.loader.getRes(this.monkey3),100,50);
    //添加到舞台
    Laya.stage.addChild(img);
}


//需要切换的图片资源路径
this.monkey5 = "../laya/assets/images/Hydrangeas.jpg";
this.monkey6 = "../laya/assets/images/Jellyfish.jpg";
//切换状态
this.flag2 = false;
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
//加载多张图片，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
Laya.loader.load([this.monkey5,this.monkey6],Laya.Handler.create(this,graphicsImg2));
function graphicsImg2(){
    //创建一个实例
    this.img3 = new Laya.Sprite();
    //添加到舞台
    Laya.stage.addChild(this.img3);
    //显示初始化绘制的图片
    switchImg2();
    //侦听switchImg中图片区域的点击事件，触发后执行switchImg切换纹理绘制
    this.img3.on(Laya.Event.CLICK,this,switchImg2);            
    //设置图片坐标s
    this.img3.pos(100,50);
}
function switchImg2(){
    //清空绘制
    this.img3.graphics.clear();
    //获得要切换的图片资源路径
    var imgUrl = (this.flag2 = !this.flag2)? this.monkey6:this.monkey5;
    //获取图片资源
    var texture = Laya.loader.getRes(imgUrl);
    //绘制纹理
    this.img3.graphics.drawTexture(texture);                        
    //设置纹理宽高
    this.img3.size(texture.width, texture.height);   
}