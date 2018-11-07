//初始化舞台
Laya.init(1334, 750,Laya.WebGL);
//设置舞台背景色
Laya.stage.bgColor = "#ffffff";
//原始位图
createImg(100,50);
//红色滤镜
creteRedFilter();
//灰色滤镜
createGrayFilter();
/**创建位图**/
function createImg(w,h){
    var Img = new Laya.Sprite(); 
    //添加到舞台
    Laya.stage.addChild(Img);   
    //加载显示图片
    Img.loadImage("../laya/assets/images/1.jpg",w,h);  
    return Img;
}
/**创建红色滤镜位图**/
function creteRedFilter(){
    //颜色滤镜矩阵,红色
    var colorMatrix = 
        [
            1, 0, 0, 0, 0, //R
            0, 0, 0, 0, 0, //G
            0, 0, 0, 0, 0, //B
            0, 0, 0, 1, 0, //A
        ];
    //创建红色颜色滤镜
    var redFilter = new Laya.ColorFilter(colorMatrix);
    //在坐标280,50位置创建一个位图
    var img = createImg(280,50); 
    //添加红色颜色滤镜效果
    img.filters = [redFilter];
}
/**创建灰色滤镜位图**/
function createGrayFilter(){
    //颜色滤镜矩阵,灰色
    var colorMatrix = 
        [
            0.3086, 0.6094, 0.0820, 0, 0,  //R
            0.3086, 0.6094, 0.0820, 0, 0, //G
            0.3086, 0.6094, 0.0820, 0, 0,  //B
            0, 0, 0, 1, 0, //A
        ];
    //创建灰色颜色滤镜
    var GrayFilter = new Laya.ColorFilter(colorMatrix);
    //在坐标460,50位置创建一个位图
    var img = createImg(460,50);     
    //添加灰色颜色滤镜效果
    img.filters = [GrayFilter];
}