$(document).ready(function(e){
    $('#inputSubmit').click(function(){
        var title2 = $('#inputTitle').val();
        var content2 = $('#inputContent').val();
        var id_user2 = 2;
        $.ajax({
            url: '/posts/',
            type: 'POST',
            data: {title:title2,content:content2,id_user:id_user2},
            success: function(result) {
                alert("Post successful");
                window.location.href = "https://proiect-webtech-cldcrst96.c9users.io/";
        } 
    });
    })
})