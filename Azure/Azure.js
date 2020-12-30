
 var curindex = 0
 var maxlen = document.getElementById("picturelist").getElementsByTagName("li").length-1
 var timer = null
 var width = 1537
 timer = setInterval(change_next,3000)
 function change_next(){
     if(curindex<maxlen){
         curindex++;
         get_next()
     }
     else{
         curindex = 0;
         get_reset()
     }
 }
 function get_next(){
      var totalpicturelist = document.getElementById("picturelist")
      totalpicturelist.style.marginLeft = "-"+width*curindex+"px"
      totalpicturelist.style.transition = 0.3+"s"
 }
 function get_reset(){
    var totalpicturelist = document.getElementById("picturelist")
    totalpicturelist.style.marginLeft = "0px"
    totalpicturelist.style.transition = "0s"
 }