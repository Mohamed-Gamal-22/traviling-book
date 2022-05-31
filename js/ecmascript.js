document.querySelector('.tabs .container .row ul .one')
.addEventListener('click',function(e){
    this.classList.add('active')
    document.querySelector('.tabs .container .row ul .two').classList.remove('active')
    document.querySelector('.tabs .container .row ul .three').classList.remove('active')

    document.querySelector('.tabs .container .row .content .tab-1').classList.remove('d-none')
    document.querySelector('.tabs .container .row .content .tab-2').classList.add('d-none')
    document.querySelector('.tabs .container .row .content .tab-3').classList.add('d-none')

    document.querySelector('.tabs .container .row .img-1').classList.remove('d-none')
    document.querySelector('.tabs .container .row .img-2').classList.add('d-none')
    document.querySelector('.tabs .container .row .img-3').classList.add('d-none')


})


document.querySelector('.tabs .container .row ul .two')
.addEventListener('click',function(e){
    this.classList.add('active')
    document.querySelector('.tabs .container .row ul .one').classList.remove('active')
    document.querySelector('.tabs .container .row ul .three').classList.remove('active')

    document.querySelector('.tabs .container .row .content .tab-1').classList.add('d-none')
    document.querySelector('.tabs .container .row .content .tab-2').classList.remove('d-none')
    document.querySelector('.tabs .container .row .content .tab-3').classList.add('d-none')

    document.querySelector('.tabs .container .row .img-1').classList.add('d-none')
    document.querySelector('.tabs .container .row .img-2').classList.remove('d-none')
    document.querySelector('.tabs .container .row .img-3').classList.add('d-none')

})


document.querySelector('.tabs .container .row ul .three')
.addEventListener('click',function(e){
    this.classList.add('active')
    document.querySelector('.tabs .container .row ul .two').classList.remove('active')
    document.querySelector('.tabs .container .row ul .one').classList.remove('active')

    document.querySelector('.tabs .container .row .content .tab-3').classList.remove('d-none')
    document.querySelector('.tabs .container .row .content .tab-2').classList.add('d-none')
    document.querySelector('.tabs .container .row .content .tab-1').classList.add('d-none')

    document.querySelector('.tabs .container .row .img-1').classList.add('d-none')
    document.querySelector('.tabs .container .row .img-2').classList.add('d-none')
    document.querySelector('.tabs .container .row .img-3').classList.remove('d-none')
})