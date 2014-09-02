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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13536, function(sym, e) {
         this.play(0)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("segment1").css("background-image", "url(images/checker.PNG)", "background-repeat", "repeat-x");
         sym.$("segment1Copy15").css("background-image", "url(images/checker.PNG)", "background-repeat", "repeat-x");
         sym.$("segment1Copy16").css("background-image", "url(images/checker.PNG)", "background-repeat", "repeat-x");
         for(var i=2; i<=11; i++) {
         	sym.$("segment1Copy" + i).css("background-image", "url(images/checker.PNG)", "background-repeat", "repeat-x");
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-skyline4");