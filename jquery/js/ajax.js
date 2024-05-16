$(function(){
    $('.request').on('click',function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            dataType:'json',
            success: function(data){
                if(data.length>0){
                    var tb= $('<table />')
                    for(i=0;i<data.length;i++){
                        console.log(data[i].title)
                        var row = $('<tr />').append(
                            $('<td />').text(data[i].title)
                        )
                        tb.append(row)
                        
                    }
                    $('.wrap').append(tb).addClass('table table-success table-striped')
                }
            },
            error:function(e){
                console.log(e)
            }

        })
    })
})

