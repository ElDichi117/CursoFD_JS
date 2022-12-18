const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const asideSecondary = document.querySelector('.product-detail-second');
const closeIconAside = document.querySelector('.product-detail-close-second');
const productImageInfor   = document.querySelector('.product-detail-second > img:nth-child(2)')
const labelPriceInfo      = document.querySelector('.product-info-second p:nth-child(1)')
const labelNameInfo       = document.querySelector('.product-info-second p:nth-child(2)')
const labelInforInfo      = document.querySelector('.product-info-second p:nth-child(3)')
const arrowIconAside = document.querySelector('#arrow');
                            //Evento , función
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMobile);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeIconAside.addEventListener('click',closeProductDetailAside)
arrowIconAside.addEventListener('click', closeMenuShoppingCard);

function toggleDesktopMenu(event){
    event.preventDefault();
    var isAsideClosed = aside.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado

    if(!isAsideClosed){ // Si el carrito de compras no esta cerrado
        aside.classList.toggle('inactive');// Cerramos ese menu
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');//toggle añade o quita la clase que se le indica
}

function toggleMobileMobile(event){
    event.preventDefault();
    var isAsideClosed = aside.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado

    if(!isAsideClosed){ // Si el carrito de compras no esta cerrado
        aside.classList.toggle('inactive');// Cerramos ese menu
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');//toggle añade o quita la clase que se le indica
}

function toggleCarritoAside(event){
    event.preventDefault();
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado
    
    if(!isMobileMenuClosed){ // Si el menu no esta cerrado
        mobileMenu.classList.toggle('inactive');// Cerramos el menu
    }
    
    if(!isDesktopMenuClosed){ // Si el menu no esta cerrado
        desktopMenu.classList.toggle('inactive');// Cerramos el menu
    }
    const isProductDetailClosed = asideSecondary.classList.contains('inactive'); //Si contiene la clase inactive quiere decir que el elemento esta cerrado
    
    if(!isProductDetailClosed){ // Si el menu no esta cerrado
        asideSecondary.classList.add('inactive');// Cerramos el menu
    }
    
    aside.classList.remove('inactive');
}

function openProductDetailAside(event){
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideSecondary.classList.remove("inactive");
}
function closeProductDetailAside(){
    asideSecondary.classList.add("inactive");
}

function closeMenuShoppingCard(){
    aside.classList.add('inactive');
}

const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description : "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description : "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description : "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description : "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description : "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description : "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description : "7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description : "8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description : "9 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
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
    <div/>
</div> */

function renderProducts(arr) {
    //Comienzo maquetación HTML en JS
    for (const product of arr) {
        const productCard = document.createElement('div');// Generamos el primer div
        productCard.classList.add('product-card');// agregamos el estilo de CSS correspondiente
        
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);// Asignamos el atributo de manera dinámica
        
        const productInfo = document.createElement('div');// Generamos el segundo div
        productInfo.classList.add('product-info');// Le asignamos su hijo
        
        const productInfoDiv = document.createElement('div'); // Creamos el tercer el div
        //Se crean los parrafos que mostraran el nombre y precio de cada producto
        const productPrice = document.createElement('p'); 
        productPrice.innerText = '$' + product.price;  
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;
        productDescription.classList.add('inactive');
        
        productInfoDiv.appendChild(productPrice);// Le agregamos un hijo al div de la infromación
        productInfoDiv.appendChild(productName);// Le agregamos otro hijo al div anterior
        productInfoDiv.appendChild(productDescription);// Le agregamos otro hijo al div anterior
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);// Agregamos un hijo
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);// Aquí todo se le asigna al div cards-container
        productImg.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name, product.description)
            openProductDetailAside()
        });//Definimos la función que se va a ejecutar cuando demos click en la imagen
    }
}
      
//Función que muestra la info del producto seleccionado
function mostrarInfoProduct(imagen, precio, nombre, descripcion){
    productImageInfor.setAttribute('src', imagen);
    labelPriceInfo.innerText = '$' + precio;
    labelNameInfo.innerText = nombre;
    labelInforInfo.innerText = descripcion;
}

renderProducts(productList);