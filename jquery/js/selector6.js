$(function(){
    var user_name = $('#user_name')
    var user_id = $('#user_id')
    console.log('name:',user_name.val())
    user_name.val('길순이')
    console.log('name:',user_name.val())
    console.log('id:',user_id.val())
    user_id.val('Hi')
    console.log('id:',user_id.val())
    var user_check = $('.chk input')
    var user_sel = $('#sel option')
    $.each((user_check),function(i,o){
        if($(o).prop('checked')){
            console.log($(o))
            $(o).prop('checked',false)
        }
    })
    
    // $.each((user_sel),function(i,o){
    //     if($(this).prop('selected')){
    //         console.log($(this))
    //     }
    // })
    // $('#sel').on('change',function(e){
    //     console.log(e.target.value)
    //     let index = $(this).prop('selectedIndex')
    //     console.log(index)
    //     $(this).prop("selected",true)
    // })

    $('#sel').on('change',function(e){
        let index = $(this).prop('selectedIndex')
        $(this).find('option').eq(index).prop('selected',true)
        let sel_value = $('#sel option:selected').val()
        console.log("24",sel_value)
        $(this).prop("selected",true)
        $(this).find('option').attr('selected',false)
        $(this).find('option').eq(index).attr('selected',true)
    })

}) 