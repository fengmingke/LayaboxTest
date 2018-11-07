//初始化舞台
Laya.init(1334, 750,Laya.WebGL);
//创建动画实例
this.roleAni = new Laya.Animation();
//加载动画图集，加载成功后执行回调方法
this.roleAni.loadAtlas("res/atlas/role.atlas",Laya.Handler.create(this,onLoaded));
function onLoaded(){
    //添加到舞台
    Laya.stage.addChild(this.roleAni);
    //播放动画
    this.roleAni.play();
}