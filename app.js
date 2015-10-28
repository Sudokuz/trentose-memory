/* your code should go here */
var tmpl = "<li id='NUM'  class='done'>" +
                "<h3>DATA</h3>" +         
            "</li>";
var cardcount = parseInt(cardcount);
/*

    
        <li id="1" class="done">
          <h3>2</h3>
        </li>    
        <li id="2" class="done">
          <h3>3</h3>
        </li>               
        <li id="3" class="hidden">
          <h3>4</h3>
        </li>    
        
        */
// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    
    for( var i=0; i<10; i++){
        $(".cards").append( tmpl.replace("NUM",i).replace("DATA",data[i]) );   
    }
    
    $(".opt-start").click( function () {
        
        cardcount = 1;
        
        //switches all cards to hidden
        $(".done").addClass("hidden").removeClass("done");
        
        $(".cards li").on("click", function (event) {
            
            $(this).addClass("done").removeClass("hidden");
            
            if( $(this).text() == cardcount ) {
                cardcount++;
            } else {
                alert("You lost!");   
            }
            
            //win condition
            if(cardcount > 10){
             alert("You won!");   
            }
            
        });
        
    });
    
      
});







