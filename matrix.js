
let can = document.getElementById('can');
let ctx = can.getContext('2d');
can.height = window.innerHeight;
can.width = window.innerWidth;
let array = '甲己丹句乍日呂廾勹片片工凵と乍呂レ日日句乍工凵勹レ日亡メと卞己呂句レ亡亡勹メ工勹日亡勹メ亡几勹片乙メ亡工勹メ几亡勹メ几工亡几メ片工廾凵句isicing elit.Similiqueकोड पहले ही एन्क्रिप्ट किया जा चुका हैores officiis vel ? Volup कोड पहले ही एन्क्रिप्ट किया जा चुका हैat dolores quam mollitia voluptatem reprehenderit!';

class Matrix {
    constructor(x, y) {
        this.y = y;
        this.x = x;
        // this.ch = c;
    }
    draw() {
        ctx.fillStyle = "green"
        this.ch = array[Math.floor(Math.random() * array.length)];

        ctx.font = "30px verdana";
        ctx.fillText(this.ch, this.x * 30, this.y * 30)
        if (this.y * 30 >= can.height && Math.random() > 0.9) {
            this.y = 0;
        } else
            this.y += 1;
    }

}

let parti = [];
for (let i = 0; i < can.width; ++i) {

    parti.push(new Matrix(i, 0));


}
let ltime = 0,
    timer = 0;;

function ani(time) {
    let del = time - ltime;
    ltime = time;

    if (timer > 10) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, can.width, can.height);
        for (let i = 0; i < can.width; ++i)
            parti[i].draw();
        timer = 0;
    } else timer += del;
    requestAnimationFrame(ani)

}
ani(0)