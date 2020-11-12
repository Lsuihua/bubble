class Game{
  constructor(param){
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas = document.getElementById(param.canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.dataList = [
      "./imgs/0.jpg",
      "./imgs/1.jpg",
      "./imgs/2.jpg",
      "./imgs/3.jpg",
      "./imgs/4.jpg",
      "./imgs/5.jpg",
      "./imgs/6.jpg",
      "./imgs/7.jpg",
      "./imgs/8.jpg",
      "./imgs/9.jpg",
      "./imgs/10.jpg",
      "./imgs/11.jpg",
      "./imgs/12.jpg",
      "./imgs/13.jpg",
      "./imgs/14.jpg",
      "./imgs/15.jpg",
      "./imgs/16.jpg",
      "./imgs/17.jpg",
      "./imgs/18.jpg",
      "./imgs/19.jpg"
    ];
    this.bubbleList = [];

    this.ready = false;
    this.timer = null;
  }

  // 初始化
  init(){
    this.loadResource(() => {
      this.animate();
    })
  }

  // 加载数据资源
  loadResource(callBack){
    callBack && callBack();
  }

  // 更新
  update(){

  }

  // 动画
  animate(){
    var self = this;
    self.render();
    self.timer = requestAnimationFrame(self.animate.bind(self));
  }

  // 渲染
  render(){
    var bubble = new Bubble();
    if(bubble.timer) return;
    bubble.init();
  }
}