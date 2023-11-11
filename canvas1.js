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

    function rand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };

    let posX = rand(1,100)+canvas.width/2;
    let posY = 0;
    ctx.lineWidth = 2;

    for (let x = 0; x < 60; x++) {
        ctx.lineTo(posX,posY);
        posY+=rand(1,13);
        rand(0,1)==1 ? posX+=rand(1,13):posX-=rand(1,13)
        
    }
    ctx.stroke()
})