

        $(document).scroll(function() {
            var x = $(document).scrollTop();          
            $('#cabecera').css("height", Math.max(500-x,80));
            $('#cabecera2').css("height", Math.max(500-x,80));
            $('#cabecera2').css("opacity", Math.max(500-x,80));    
            $('#image-cabecera').css("opacity", Math.max(500-x,80)/500);          
        });
        
        
function sorteo(){


    var x = new Array(4);
    for (var i = 1; i <= 4; i++) {
        x[i-1] = new Array(8);
        for(var j=0; j<8; j++){
            alert(document.getElementById("pot"+i).childNodes.length);    
            x[i-1][j] = document.getElementById("pot"+i).childNodes[2*j+3].cloneNode(true);
            alert(""+x[i-1][j].className);    
        }
    }
    for (var i = 0; i < 4; i++) { 
        for(var j=7; j>0; j--){
            var nj = Math.floor((Math.random()*j));
            var temp = x[i][nj];
            x[i][nj] = x[i][j];
            x[i][j] = temp;    
        }
    }

    for (var i = 1; i <= 8; i++){
            $("#group"+(i)).empty();       
        }  

    for(var j=0; j<8; j++){
        for (var i = 0; i < 4; i++){

            document.getElementById("group"+(j+1)).appendChild( x[i][j] );       
        }    
        
    }
};
        
        
        
// Create a new object based of the HTMLElement prototype
var XProductProto = Object.create(HTMLElement.prototype);
// Set up the element.
XProductProto.createdCallback = function() {
    // Create a Shadow Root
    var shadow = this.createShadowRoot();

    // Create an img element and set it's attributes.
    var img = document.createElement('img');
    img.alt = this.getAttribute('data-name');
    img.src = this.getAttribute('data-img');
    img.className = 'product-img';

    // Add the image to the Shadow Root.
    shadow.appendChild(img);

    // Create a link to the product.
    var link = document.createElement('div');
    link.textContent = this.getAttribute('data-name');
    link.className = 'product-name';

    // Add the link to the Shadow Root.
    shadow.appendChild(link);
};


// Register the new element.
var XProduct = document.registerElement('x-product', {
    prototype: XProductProto
});



        
