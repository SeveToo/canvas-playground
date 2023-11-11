window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    // Resizing 
    canvas.width = window.innerWidth*3/4;
    canvas.height = window.innerHeight*3/4;

    // Function strokeStyle
    ctx.lineWidth = 2;
    ctx.strokeStyle = `#FF0000`;
    ctx.fillStyle = "#dddddd";

    // Function Draw
    ctx.beginPath();
    let w = 0.07;
    let h = canvas.width;

    for (let x = 0; x < 17; x++) {
        y = canvas.height/2;
        ctx.fillRect(x*30, 0, w, h)
        ctx.fillRect(0, x*30, h, w)
    }

// f(x) = 2x+3

    function rand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };

    let posX = 0;
    let posY = canvas.height;
    ctx.lineWidth = 2;

    for (let i = 0; i < 500; i++) {
        let x = i ;
        let a = -i;
        let y = ((2*a+3));
        y += canvas.height;
        ctx.lineTo(x,y) 
    }
    ctx.stroke()
})