// DOM => Document Object Model
// BOM => Browser Object Model

var $= document;
var shoz = [
    {id:1 , h1: 'Best Shoes' , img : 'images/1.png' , price:'$55'},
    {id:2 , h1: 'Men Shoes' , img : 'images/2.png' , price:'$99'},
    {id:3 , h1: 'Women Shoes' , img : 'images/3.png' , price:'$33'}
]



shoz.forEach(function (shoes) {
    var divall = $.querySelector('.container')

var divcard = $.createElement('div')
divcard.classList.add('product-card')

var h1 = $.createElement('h1') ///
h1.innerHTML=shoes.h1

var p =$.createElement('p')
p.innerHTML='Lorem ipsum, or lipsum as it is sometimes known'

var divimg = $.createElement('div') ///
divimg.classList.add('product-pic')
divimg.style.backgroundImage = 'url('+ shoes.img+')'

var divinfo = $.createElement('div')
divinfo.classList.add('product-info')

var divprice = $.createElement('div') ///
divprice.classList.add('product-price')
divprice.innerHTML=shoes.price

var diva = $.createElement('a')
diva.classList.add('product-button') ///
diva.innerHTML='See More'
diva.setAttribute('href' , 'product.html?id=' + shoes.id )

divcard.append(h1 , p , divimg , divinfo)
divinfo.append(divprice , diva)
divall.append(divcard)
})
