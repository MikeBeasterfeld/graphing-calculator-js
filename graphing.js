function consoleLog (message) {
//   console.log( message );
}

function findWindowWidth() {
   var width = innerWidth;
   if ( width % 2 != 0 ) {
      width--;
   }

   width = width - 30;

   return width;
   return 200;
}

function findWindowHeight() {
   var height = innerHeight;
   if ( height % 2 != 0 ) {
      height--;
   }

   height = height - 30;

   return height;
   return 200;
}

function outputWindowSize() {
   var outputDiv = document.getElementById("output");

   windowHeight = findWindowHeight();
   windowWidth = findWindowWidth();

   addOutput( 'Width: ' + windowWidth + ' - Height: ' + windowHeight );
}

function drawGrid( equation ) {
   var y_max = findWindowHeight();
   var x_max = findWindowWidth();

   var gridDiv = document.getElementById("grid");

   for (x_iter = 1; x_iter <= x_max; x_iter++) {
      for ( var y = 1; y <= y_max; y++ ) {
         if ( x_max / 2 == x_iter ) {
            placeDot(gridDiv, x_iter, y, 'pixel');
         } else if ( (y_max / 2) - 1 == y ) {
            placeDot(gridDiv, x_iter, y, 'pixel');
         }
      }

      if ( equation.length > 0 ) {

         consoleLog( 'x_iter: ' + x_iter );

         var x = x_max / 2;

         consoleLog( '1 x: ' + x );

         x = (x_iter - x) - 1;

         consoleLog( '2 x: ' + x );

         x = x * 0.1;

         consoleLog( '3 x: ' + x );

         var y_comp = eval( equation );

         consoleLog( '1 y_comp: ' + y_comp );

         y_comp = Math.round( (y_comp * 10) - 0.1 );

         consoleLog( '2 y_comp: ' + y_comp );

         y_comp = ((y_max / 2) - y_comp) - 1;

         consoleLog( '3 y_comp: ' + y_comp );

         if ( y_comp < y_max ) {
            placeDot(gridDiv, x_iter, y_comp, 'dot');
         }
      }
   }
}

function placeDot(div, x, y, divClass) {
   var dotElement = document.createElement('div');

   dotElement.className = divClass;

   dotElement.style.position = 'absolute';
   dotElement.style.top = y + 'px';
   dotElement.style.left = x + 'px';

   div.appendChild( dotElement );
}

function addOutput(message) {
   var outputDiv = document.getElementById("output");

   var paragraph = document.createElement( 'p' );
   paragraph.appendChild( document.createTextNode( message ) );
   outputDiv.appendChild( paragraph );
}

function dropGrid() {
   var gridDiv = document.getElementById("grid");
   var newDiv = document.createElement("DIV");
   newDiv.id = gridDiv.id;
   gridDiv.parentNode.replaceChild( newDiv, gridDiv );
}

function redrawGrid( equation ) {
   dropGrid();
   drawGrid( equation );
}

   