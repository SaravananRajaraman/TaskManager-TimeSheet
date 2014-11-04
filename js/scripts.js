$(function(){
    //Project View
    $("#addNew").on('click',function(){
       $("#myModalLabel").text('Add Project');
       //$("#modalBody").html();
        $("#addNewProject").show();
    });
    $("#addNewProject").on('click',function(){
       //alert('hai');

        $.ajax({
            type: "POST",
            url: 'https://api.mongolab.com/api/1/databases/mugilsofthrm/collections/projectView/?apiKey=_zcDwN4QMo6_2GwyxWZk3OA_jF0pb_Qe',
            data: JSON.stringify( {
                "projectTitle" : $("#projectTitle").val(),
                "projectDescription":$("#projectDescription").val()
            } ),
            contentType: "application/json",
            success:function(res){
                console.log(res);
                $("#projectTitle").val('');
                $("#projectDescription").val('');
                $("#myModal").modal('hide');
            },
            error:function(e){
                console.log("error");
            }
        });
    });


    $("#viewLogs").on('click',function(){
        $("#myModalLabel").text('View Logs');
    });
});