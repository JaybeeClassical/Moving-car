<script>
   var sketchProc = function(processingInstance) {
    with (processingInstance) {
       size(400, 400); 
       frameRate(30);
       
       // ProgramCodeGoesHere
       noStroke();

// position of the car
var x = 10;
    
draw = function() {
    
    // all lines of code inside here will be run repeatedly
    background(151, 244, 247);
    
    // draw the car body
    fill(255, 65, 15);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
    x = x + 1;
};
   }};

   // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processingInstance = new Processing(canvas, sketchProc); 
</script>