const images = ["1.jpeg","2.jpeg","3.jpeg"];
const chosen = parseInt((Math.random()*10)%images.length);
const src="/Users/woo/Desktop/code/myWeb/img/"+images[chosen];
console.dir(document.body);
document.body.background=src;