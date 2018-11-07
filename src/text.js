//创建舞台，默认背景色是黑色的
//Laya.init(600, 400); 
//Laya.init(1136,640);
//初始化引擎,不支持WebGL时自动切换到Canvas
Laya.init(1200,800,Laya.WebGL);
var txt = new Laya.Text(); 
//设置文本内容
txt.text = "Hello Layabox";  
//设置文本颜色
txt.color = "#FF0000";
//设置文本字体大小，单位是像素
txt.fontSize    = 66;  
//设置字体描边
txt.stroke = 5;//描边为5像素
txt.strokeColor = "#FFFFFF";  
//设置为粗体
txt.bold = true;  
//设置文本的显示起点位置X,Y
txt.pos(60,100);  
//设置舞台背景色
Laya.stage.bgColor  = '#23238E';  
//将文本内容添加到舞台 
Laya.stage.addChild(txt);


var txt2 = new Laya.Text();
//设置文本内容
txt2.text = "hello_world";
//设置文本颜色
txt2.color = "#ffffff";
//设置文本字体
txt2.font = "Ya Hei";
//设置字体大小
txt2.fontSize = 32;
//设置文本区背景
txt2.bgColor = "#c30c30";
//设置文本框的颜色
txt2.borderColor = "#23cfcf";
//设置文本的宽高
txt2.width = 400;
txt2.height = 200;
//设置文本水平居中
txt2.align = "center";
//设置文本垂直居中
txt2.valign = "middle";
//设置粗体、斜体
txt2.bold = true;
//设置斜体
txt2.italic = true;
Laya.stage.addChild(txt2);


var txt3 = new Laya.Text();
//设置文本内容
txt3.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
//设置文本区背景
txt3.bgColor = "#c30c30";
//设置文本的宽高
txt3.width = 400;
txt3.height = 200;
txt3.pos(0,200); 
//设置文本水平居中
txt3.align = "center";
//设置文本垂直居中
txt3.valign = "middle";
//设置自动换行
txt3.wordWrap = true;
Laya.stage.addChild(txt3);


setup();
function setup(){
    var t1 = createText();
    //设置不进行任何裁剪
    t1.overflow = Laya.Text.VISIBLE;
    t1.pos(0,0);
    var t2 = this.createText();
    //设置不显示文本区域外的字符像素
    t2.overflow = Laya.Text.SCROLL;
    t2.pos(0,200);
    var t3 = this.createText();
    //设置不显示超出文本域的字符
    t3.overflow = Laya.Text.HIDDEN;
    t3.pos(0,400);
}
function createText(){
    var txt = new Laya.Text();
    txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
    txt.borderColor = "#ffff00";
    //设置宽高以后的自动裁剪会按照这个区域裁剪
    txt.size(300,50);
    txt.fontSize = 20;
    txt.color = "#ffffff";
    Laya.stage.addChild(txt);
    return txt;
}


createText2();
function createText2(){
    this.txt = new Laya.Text();
    this.txt.overflow = Laya.Text.SCROLL;
    this.txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
    this.txt.size(200,100);
    this.txt.x = Laya.stage.width - this.txt.width>>1;
    this.txt.y = Laya.stage.height - this.txt.height>>1;
    this.txt.borderColor = "#ffff00";
    this.txt.fontSize = 20;
    this.txt.color = "#ffffff";
    Laya.stage.addChild(this.txt);
    this.txt.on(Laya.Event.MOUSE_DOWN,this,startScrollText);
}
/*开始滚动文本*/
function startScrollText(){
    this.prevX = this.txt.mouseX;
    this.prevY = this.txt.mouseY;
    Laya.stage.on(Laya.Event.MOUSE_MOVE,this,scrollText);
    Laya.stage.on(Laya.Event.MOUSE_UP,this,finishScrollText);
}
/* 停止滚动文本 */
function finishScrollText()
{
    Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
    Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText);
}
/* 鼠标滚动文本 */
function scrollText()
{
    var nowX = this.txt.mouseX;
    var nowY = this.txt.mouseY;
    this.txt.scrollX += this.prevX - nowX;
    this.txt.scrollY += this.prevY - nowY;
    this.prevX = nowX;
    this.prevY = nowY;
}


//设置画布的背景颜色
Laya.stage.bgColor = "#efefef";
Text_InputSingleline();
Text_InputMultiline();
function Text_InputSingleline(){
    var textInput = new Laya.TextInput("单行输入");//创建一个 TextInput 类的实例对象 textInput 。
    textInput.wordWrap = true;//设置 textInput 的文本自动换行。
    textInput.fontSize = 30;//设置 textInput 的字体大小。
    textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    textInput.y = 0;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    textInput.width = 300;//设置 textInput 的宽度。
    textInput.height = 200;//设置 textInput 的高度。
    textInput.bgColor = "#c30c60";
    Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
}
function Text_InputMultiline(){
    var textInput = new Laya.TextInput("多行输入");//创建一个 TextInput 类的实例对象 textInput 。
    textInput.fontSize = 30;//设置 textInput 的字体大小。
    textInput.wordWrap = true;//设置 textInput 的文本自动换行。
    textInput.multiline = true;//设置textInput的多行输入
    textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    textInput.y = 300//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    textInput.width = 300;//设置 textInput 的宽度。
    textInput.height = 200;//设置 textInput 的高度。
    textInput.bgColor = "#c30c60";
    Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
}


//自定义文件名称
this.mFontName = "diyFont";
this.mBitmapFont = new Laya.BitmapFont();
//这里不需要扩展名，外部保证fnt与png文件同名
this.mBitmapFont.loadFont("../bin/h5/textTest.fnt",new Laya.Handler(this,onLoaded));
function onLoaded(){
    console.log("test")
    init();
}
function init(){
    //如果位图字体中，没放空格，最好设置一个空格宽度
    this.mBitmapFont.setSpaceWidth(10);
    Laya.Text.registerBitmapFont(this.mFontName,this.mBitmapFont);
    var txt = new Laya.Text();
    txt.color = "#00ff00";
    txt.text = "rtjsrtjktryktyjktrrfjrtjr测试文件";
    //设置宽度，高度自动匹配
    txt.width = 250;
    //自动换行
    txt.wordWrap = true;
    txt.align = "center";
    //使用我们注册的字体
    txt.font = this.mFontName;
    txt.fontSize = 50;
    txt.leading = 5;
    Laya.stage.addChild(txt);
}