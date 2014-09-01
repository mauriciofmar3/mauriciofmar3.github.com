/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         for(var i=2; i<=53; i++) {
         	sym.$("Text2Copy" + i).html("0");
         }
         
         this.play(0)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         for(var i=2; i<=9; i++) {
         	sym.$("Text2Copy" + i).html("8");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         for(var i=10; i<=18; i++) {
         	sym.$("Text2Copy" + i).html("4");
         }
         for(var i=20; i<=39; i++) {
         	sym.$("Text2Copy" + i).html("4");
         }
         sym.$("Text2Copy48").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         for(var i=30; i<=39; i++) {
         	sym.$("Text2Copy" + i).html("9");
         }
         sym.$("Text2Copy10").html("9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         for(var i=11; i<=15; i++) {
         	sym.$("Text2Copy" + i).html("7");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         for(var i=20; i<=22; i++) {
         	sym.$("Text2Copy" + i).html("6");
         }
         for(var i=40; i<=48; i++) {
         	sym.$("Text2Copy" + i).html("6");
         }
         for(var i=50; i<=53; i++) {
         	sym.$("Text2Copy" + i).html("6");
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-540608186");