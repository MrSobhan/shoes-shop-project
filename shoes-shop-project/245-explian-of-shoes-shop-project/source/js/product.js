// ✌ :))

var $ = document;

$.querySelector('button').addEventListener('click' , ()=>{
    history.back()
})

var shoz = [
    {id:1 , h1: 'Best Shoes' , img : 'images/1.png' , price:'$55'},
    {id:2 , h1: 'Men Shoes' , img : 'images/2.png' , price:'$99'},
    {id:3 , h1: 'Women Shoes' , img : 'images/3.png' , price:'$33'}
]

var locationSer = new URLSearchParams(location.search);
var id  =  locationSer.get('id')



shoz.forEach(function (shoes){
    if(id == shoes.id){
        var divdete = $.querySelector('.details')

var divdesc = $.createElement('div')
divdesc.classList.add('desc')

var h1elem = $.createElement('h1')///
h1elem.innerHTML=shoes.h1

var pelem = $.createElement('p')
pelem.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?"+'<br>'+' price:'+shoes.price

var divimg = $.createElement('div')
divimg.classList.add('image')

var img = $.createElement('img')///
img.setAttribute('src' , shoes.img)

divdete.append(divimg , divdesc);
divdesc.append(h1elem , pelem);
divimg.append(img)

document.title = 'Product | '+shoes.h1
    }
})

