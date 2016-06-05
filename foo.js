

        $(document).scroll(function() {
            var x = $(document).scrollTop();          
            $('#cabecera').css("height", Math.max(500-x,80));
            $('#cabecera2').css("height", Math.max(500-x,80));
            $('#cabecera2').css("opacity", Math.max(500-x,80));    
            $('#image-cabecera').css("opacity", Math.max(500-x,80)/500);          
        });
        
        
        
        
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



        
