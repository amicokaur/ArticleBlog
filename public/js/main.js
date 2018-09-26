$(function(){
    $(".articles").on("click",function(event){
        var id = $(this).data("id")
        $(".card-header").data("id", id);
        
        
    })
})