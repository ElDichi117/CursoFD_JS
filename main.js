const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const asideSecondary = document.querySelector('.product-detail-second');
const closeButtonAside = document.querySelector('.product-detail-close');

                            //Evento , función
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMobile);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeButtonAside.addEventListener('click', toggleCloseButtonAside);

function toggleDesktopMenu(event){
    event.preventDefault();
    var isAsideClosed = aside.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado

    if(!isAsideClosed){ // Si el carrito de compras no esta cerrado
        aside.classList.toggle('inactive');// Cerramos ese menu
    }
    desktopMenu.classList.toggle('inactive');//toggle añade o quita la clase que se le indica
}

function toggleMobileMobile(event){
    event.preventDefault();
    var isAsideClosed = aside.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado

    if(!isAsideClosed){ // Si el carrito de compras no esta cerrado
        aside.classList.toggle('inactive');// Cerramos ese menu
    }
    mobileMenu.classList.toggle('inactive');//toggle añade o quita la clase que se le indica
}

function toggleCarritoAside(event){
    event.preventDefault();
    var isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado
    var isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado

    if(!isMobileMenuClosed){ // Si el menu no esta cerrado
        mobileMenu.classList.toggle('inactive');// Cerramos el menu
    }
    
    if(!isDesktopMenuClosed){ // Si el menu no esta cerrado
        desktopMenu.classList.toggle('inactive');// Cerramos el menu
    }
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});
/* 
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts(arr) {
    //Comienzo maquetación HTML en JS
    for (product of arr) {
        const productCard = document.createElement('div');// Generamos el primer div
        productCard.classList.add('product-card');// agregamos el estilo de CSS correspondiente
        
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);// Asignamos el atributo de manera dinámica
        productImg.addEventListener('click',showDetails);
        
        const productInfo = document.createElement('div');// Generamos el segundo div
        productInfo.classList.add('product-info');// Le asignamos su hijo
        
        const productInfoDiv = document.createElement('div'); // Creamos el tercer el div
        //Se crean los parrafos que mostraran el nombre y precio de cada producto
        const productPrice = document.createElement('p'); 
        productPrice.innerText = '$' + product.price;  
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);// Le agregamos un hijo al div de la infromación
        productInfoDiv.appendChild(productName);// Le agregamos otro hijo al div anterior
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);// Agregamos un hijo
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);// Aquí todo se le asigna al div cards-container
    }
}
      
renderProducts(productList);

/* 
<aside class="product-detail-second inactive">
    <div class="product-detail-close-second">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info-second">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button-second add-to-cart-button-second">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
</aside> */

function showDetails(arr){
    
    asideSecondary.classList.remove('inactive');
    //#region Maquetación en HTML
    const productInfoAside = document.createElement('div');
    productInfoAside.classList.add('product-info-second');

    //Mostramos la información del producto
    const productPriceAside = document.createElement('p');
    productPriceAside.innerText = '$' + product.price;
    productInfoAside.appendChild(productPriceAside);  

    const productNameAside = document.createElement('p');
    productNameAside.innerText = product.name;  
    productInfoAside.appendChild(productNameAside);  

    const productDescriptionAside = document.createElement('p');
    productDescriptionAside.innerText = product.name;  
    productInfoAside.appendChild(productDescriptionAside);  

    const buttonAside = document.createElement('button');
    buttonAside.classList.add('primary-button-second');
    buttonAside.classList.add('add-to-cart-button-second');
    buttonAside.innerText = "Add to cart";
    
    const imgButtonAside = document.createElement('img');
    imgButtonAside.setAttribute('src','./icons/bt_add_to_cart.svg');
    buttonAside.appendChild(imgButtonAside);

    productInfoAside.appendChild(buttonAside);
   
    asideSecondary.appendChild(productInfoAside);    
    //#endregion

}
