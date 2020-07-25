$(document).ready(function(){

$('body').scrollspy({target: "#navbar-scrollspy"})
// Add smooth scrolling on all links inside the navbar
$("#navbar-scrollspy a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

}); // End animation

//navbar auto close after click
/*navbar close after any click on page*/
$('a').on('click',function(){ $('.navbar-collapse').collapse('hide');});

/*navbar close after click any link on it*/
$('.navbar-nav>li>a').on('click', function(){ $('.navbar-collapse').collapse('hide'); });

$('#navbar-scrollspy a').on('click', function(){ $('.navbar-toggler').click();
		});
	  //end
	  
	  	  
	  if ($(window).width() < 720) {
    $('.medquery').addClass('col-md-4')
} else {
  $('.medquery').addClass('col')
  $('.medbreak').addClass('w-100')
}


	  //background_css3
	  var background = {}
  
  background.initializr = function (){
    
    var $this = this;
     

   
    //option
    $this.id = "background_css3";
    $this.style = {bubbles_color:"#8bffdd",stroke_width:0, stroke_color :"black"};
    $this.bubbles_number = 30;
    $this.speed = [1500,8000]; //milliseconds
    $this.max_bubbles_height = $this.height;
    $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random
    
    if($("#"+$this.id).lenght > 0){
      $("#"+$this.id).remove();
    }
    $this.object = $("<div style='z-inde:-1;margin:0;padding:0; overflow:hidden;position:absolute;bottom:0' id='"+$this.id+"'> </div>'").appendTo(".container");
    
    $this.ww = $(window).width()
    $this.wh = $(window).height()
    $this.width = $this.object.width($this.ww);
    $this.height = $this.object.height($this.wh);
    
    
    $("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");
    
    
    for (i = 0; i < $this.bubbles_number; i++) {
        $this.generate_bubbles()
    }
    
  }

  
  
  

   background.generate_bubbles = function() {
     var $this = this;
     var base = $("<div class='shape_background'></div>");
     var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
     if(shape_type == 1) {
       var bolla = base.css({borderRadius: "50%"})
     }else if (shape_type == 2){
       var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"}); 
     }else{
       var bolla = base; 
     }    
     var rn_size = $this.rn(.8,1.2);
     bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});        
     bolla.appendTo($this.object);
     bolla.animate({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
       $(this).remove();
       $this.generate_bubbles();
     })
       
    }

background.rn = function(from, to, arr) {
  if(arr){
          return Math.random() * (to - from + 1) + from;
  }else{
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
    }
background.initializr()

//background

	  
});//closing root
