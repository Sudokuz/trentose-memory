/* your code should go here */
var tmpl = "<li id='NUM'  class='done'>" +
                "<h3>DATA</h3>" +         
            "</li>";
var cardcount = parseInt(cardcount);

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
        
        $(".hidden").click( function (event) {
            
            $(this).addClass("done").removeClass("hidden");
            
            if( $(this).text() == cardcount ) {
                cardcount++;
            } else {
                alert("You lost!");
                $(".cards li").addClass("done").removeClass("hidden");
                cardcount = NaN;
            }
            
            //win condition
            if(cardcount > 10){
             alert("You won!");   
            }
            
        });
        
    });
    
      
});







