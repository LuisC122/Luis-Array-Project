let picgal=[];

$(".add").click(function() {
   let newpics=$(".picture-url").val();
    picgal.push(newpics);
    $(".gallery").append("<img src="+newpics+">");
    $(".picture-url").val('');
    
    
});