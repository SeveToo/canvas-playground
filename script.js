const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x,y,r,c) {
    this.x = x;
    this.y = y;
    this.r = r
    ( 
        
    this.c = c;
    
    this.dx = rand(1,5);
    this.dx *= rand(0,1) == 1 ? -1: 1;
    this.dy = rand(1,5);
    this.dy *= rand(0,1) == 1 ? -1: 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r,0, Math.PI*2);
        ctx.fill();
    }

    this.animate = function () {

        if(this.x + this.r > canvas.width || this.x-this.r<0) {
            this.dx *= -1;
        }
        if(this.y + this.r > canvas.height || this.y-this.r<0) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}



// let ball = new Circle(200,200, 80, "red");
// ball.draw();

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };

let RandColor = (which) => {
  let rand = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
  };
 switch (which) {
   case 1:
   case 'rgb':
   case 'RGB':
     return ('rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')');
     break;
   case 2:
   case 'hex':
   case 'HEX':
     let tab = '0123456789ABCDEF';
     return ('#' + tab.charAt(rand(0, 15)) + tab.charAt(rand(0, 15)) + tab.charAt(rand(0, 15)) + tab.charAt(rand(0, 15)) + tab.charAt(rand(0, 15)) + tab.charAt(rand(0, 15)));
     break;
   case 3:
   case 'hsl':
   case 'HSL':
     return ('hsl(' + rand(0, 360) + ',' + rand(0, 100) + '%,' + rand(0, 100) + '%)'
     );
 }
};

const balls = [];
for (let i = 0; i < 20; i++) {
    let r = rand(15,30);
    let x = Math.random() * (canvas.width - r*2) + r;
    let y = Math.random() * (canvas.height - r*2) + r;
    let c = "#d82312";
    balls.push(new Circle(x, y,r,c));
}

canvas.addEventListener('click', function(e) {
    let r = rand(15,30);
    balls.push(new Circle(e.clientX, e.clientY,r,"#54dc12"))
})

function Update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for (let i = 0; i < balls.length; i++) {
        balls[i].animate();
        
    }
    
    requestAnimationFrame(Update)
}

Update()
