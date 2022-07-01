
const quotepos = document.querySelector(".quote .quote__string");
const authorpos = document.querySelector(".quote .author");

const quotes = [
{author:"Winston Churchill",quote:"It is no use saying, We are doing our best.You have got to succeed in doing what is necessary."},
{author:"Saint Augustine",quote:"In doing what we ought we deserve no praise."},
{author:"George Washington",quote:"It is better to be alone than in bad company."},
{author:"Mike Tyson",quote:"Everyone Has a Plan Until They Get Punched in the Mouth"},
{author:"René Descartes",quote:"I think, therefore I am."},
{author:"Julius Caesar",quote:"I came, i saw, i conquered."},
{author:"Steve Jobs",quote:"Think different"},
{author:"John F. Kenedy",quote:"Ask not what your country can do for you, but what you can do for your country."},
{author:"Abraham Lincoln",quote:"Whatever you are, be a good one."},
{author:"Franklin D. Roosevelt",quote:"We cannot always build the future for our youth, but we can build our youth for the future."},];
let quoteNumber = parseInt((Math.random()*10)%(quotes.length));
quotepos.innerText=quotes[quoteNumber].quote;
authorpos.innerText="-"+quotes[quoteNumber].author;

function quoteChange(){
    let rand_num=parseInt((Math.random()*10)%(quotes.length));
    if (rand_num==quoteNumber){
        while(rand_num!=quoteNumber){
            rand_num=parseInt((Math.random()*10)%(quotes.length));
        }
    }
    quotepos.classList.add("fade");
    authorpos.classList.add("fade");
    setTimeout(function(){
        quoteNumber=rand_num;
        quotepos.innerText=quotes[quoteNumber].quote;
        authorpos.innerText="-"+quotes[quoteNumber].author;
        quotepos.classList.remove("fade");
        authorpos.classList.remove("fade");
        quotepos.classList.add("recome");
        authorpos.classList.add("recome");

    },2000);

     
}
setInterval(quoteChange,10000);

