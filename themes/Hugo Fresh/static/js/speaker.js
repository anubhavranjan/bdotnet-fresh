$(document).ready(function(){
    $("#speaker-submit").click(function(){
        var name = $("#speaker-name").val();
        var email = $("#speaker-email").val();
        var topic = $("#speaker-description").val();
        var jsonData = {name: name, email: email, topic: topic};
        var postData = JSON.stringify(jsonData);
        alert(postData);
        /*
        $.ajax({
            url: "http://localhost",
            method: "post",
            data: postData,
            success: function(d)
            {

            }
        })*/
    });
});