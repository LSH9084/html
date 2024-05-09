$(function(){
    $('.box2 li').css('list-style','none')
    $('.box2 li a').css('text-decoration','none')
    $('.box2 a[target]').css('color','#f00')
    $('.box2 a[href^=https]').css('color','black')
    $('.box2 a[href$=net]').css('border','1px solid red')
    $('#member_f :text').css('color','red')
    $('#member_f input[type=password]').css('backgroundColor','black').css('color','white')

    $('.box3 p:hidden').css({
        'display' : 'block',
        backgroundColor : '#ff0'
    })
    var zone1 = $('.zone1 :disabled').val()
    console.log(zone1)

    var zone2 = $('.zone2 :checked').val()
    console.log(zone2)

    var zone3 = $('.zone3 :checked').val()
    console.log(zone3)

    $('#course').on('change',function(e){
        console.log(e.target.value)
        let val = $('#course option:selected').val()
        console.log(val)
    })
})

const course = document.querySelector('#course')
for(let i=0; i<5; i++){
    const hhl = `<option class="ot${i}">${i}</option>`
    course.innerHTML += hhl
}
const ot1 = document.querySelector('.ot1')
ot1.setAttribute('selected',true)
ot1.setAttribute('id',"nn")
console.log(ot1)

