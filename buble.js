class Bubble{
  constructor(){
    this.x = Math.floor(Math.random()* game.width * 0.8 + game.width * 0.1);
    this.y = Math.floor(Math.random()* game.height * 0.8 + game.height * 0.1);
    this.r = Math.floor(Math.random() * 10 + 10);
    this.maxR = 50;
    
    this.dx = Math.random() * 2;
    this.dy = Math.random() * 1;

    this.speed = Math.random() * 0.8;
    
    this.isWinning = false;
    
    this.img = new Image();
    var n = Math.floor(Math.random() * 20);
    this.img.src = game.dataList[n] || '';
  
    this.color =  `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.random()* 0.6 +0.4})`;
    this.lineWidth = 1;
    this.maxLineWidth = 8;

    game.bubbleList.push(this);
  }

  //更新
  update(){
    this.lineWidth+= this.speed;
    this.r += this.speed;
    // 判断圆点产生的位置 控制运动的四个方向
    this.x >= game.width/2 ? this.x += this.dx : this.x -= this.dx;
    this.y >= game.height/2 ? this.y += this.dy : this.y -= this.dy;
    
    if(this.lineWidth>=this.maxLineWidth){
      this.lineWidth = this.maxLineWidth;
    }
    // 限制半径大小
    if(this.r >= this.maxR){
      this.r = this.maxR;
    }
    // 判断销毁
    if(this.x >= game.width || this.y>= game.height || this.x <= 0 || this.y <= 0 || this.r >= this.maxR){
      this.destroy();
    }
  }

  // 绘制
  render(){
    // 随机抽取数据的数据 渲染
    var ctx = game.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.shadowColor = '#ffff';
    ctx.shadowBlur = 10;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.closePath();
    ctx.stroke();
    ctx.clip();
    ctx.fill();
    // 随机画图片数据
    ctx.drawImage(this.img,this.x-this.r,this.y-this.r,this.r*2,this.r*2);
    ctx.restore();
  }

  // 动画
  start(){
    console.log("冒泡")
    game.timer = setInterval(() => {
      game.ctx.clearRect(0,0,game.width,game.height);
      for (let i = 0; i < game.bubbleList.length; i++) {
        game.bubbleList[i].update(); 
        // update 可能会删除数组小球
        game.bubbleList[i] && game.bubbleList[i].render();                   
      }
    }, 20);
  }

  // 销毁
  destroy(){
    // 超出屏幕外销毁
    game.bubbleList.map((item,index,arr) => {
      if(item === this){
        arr.splice(index,1);
      }
    });
  }
}