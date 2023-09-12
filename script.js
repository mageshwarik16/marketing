// function displayMenu() {
//   document.querySelector('.wrapper').classList.add('nav-open')
// }

// document.querySelector('#open-nav-menu').onclick = function() {
//   document.querySelector('.wrapper').classList.add('nav-open')
// }
let images = [
    {
      src: "./assets/gallery/image1.jpg",
      alt: "Image 1"
    },
    {
      src: "./assets/gallery/image2.jpg",
      alt: "Image 2"
    },
    {
      src: "./assets/gallery/image3.jpg",
      alt: "Image 3"
    }
  ]
  
  let products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]
  document.querySelector('#open-nav-menu').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.add('nav-open')
  })
  
  document.querySelector('#close-nav-menu').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('nav-open')
  })
  
  let date = new Date()
  // console.log(date.getHours());
  if(date.getHours() < 12) {
    document.getElementById('greeting').textContent = 'Good Morning !'
  } else if(date.getHours() < 18) {
    document.getElementById('greeting').textContent = 'Good Afternoon !'
  } else {
    document.getElementById('greeting').textContent = 'Good Evening !'
  }
  
  setInterval(function() {
    let date = new Date()
    document.querySelector('.time-holder span[data-time=hours].time-number').textContent = date.getHours().toString().padStart(2, 0)
  document.querySelector('.time-holder span[data-time=minutes].time-number').textContent = date.getMinutes().toString().padStart(2, 0)
  document.querySelector('.time-holder span[data-time=seconds].time-number').textContent = date.getSeconds().toString().padStart(2, 0)
  },1000)
  
  let temperature = 40
  function celToFahr(temperature) {
    return (temperature * 9/5) + 32
  }
  document.querySelector('#weather').textContent = `The weather is cloudy in Chennai and it's ${temperature}°C outside.`
  document.querySelector('.weather-group').addEventListener('click', function(e) {
    if(e.target.id === 'fahr') {
      document.querySelector('#weather').textContent = `The weather is cloudy in Chennai and it's ${celToFahr(temperature)}°F outside.`
    } else {
      document.querySelector('#weather').textContent = `The weather is cloudy in Chennai and it's ${temperature}°C outside.`
    }
  })
  
  let galleryContainer = document.querySelector('#gallery');
  
  let imageBig = document.createElement('img');
  imageBig.src = images[0].src;
  imageBig.alt = images[0].alt;
  
  galleryContainer.append(imageBig)
  
  let thumbnails = document.createElement('div')
  thumbnails.classList.add('thumbnails');
  
  images.forEach((item, index) => {
    let image = document.createElement('img')
    image.src = item.src;
    image.alt = item.alt;
    image.dataset.arrayIndex = index;
    image.dataset.selected = index === 0 ? true : false;
  
    image.addEventListener('click', function(e) {
      var selectedImage = e.target.dataset.arrayIndex
      imageBig.src = images[selectedImage].src;
      imageBig.alt = images[selectedImage].alt;
      document.querySelectorAll('.thumbnails img').forEach(item => {
        item.dataset.selected = false;
      })
      e.target.dataset.selected = true;
    })
    thumbnails.append(image);
  
  })
  galleryContainer.append(thumbnails)
  
  let productsArea = document.querySelector('.products-area');
  function productFilters(products) {
  productsArea.innerHTML = '';
  products.forEach( product => {
    
    let productItem = document.createElement('div');
    productItem.classList.add('product-item');
  
    let productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.title;
  
    // <div class="product-details">
    //               <h3 class="product-title">AstroFiction</h3>
    //               <p class="product-author">John Doe</p>
    //               <p class="price-title">Price</p>
    //               <p class="product-price">$ 49.90</p>
    //            </div>
  
    let productDetails = document.createElement('div');
    
    productDetails.classList.add('product-details')
  
    let productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;
    productDetails.append(productTitle);
  
    let productauthor = document.createElement('p');
    productauthor.classList.add('product-author');
    productauthor.textContent = product.author;
    productDetails.append(productauthor);
  
    let productPriceTitle = document.createElement('p');
    productPriceTitle.classList.add('price-title');
    productPriceTitle.textContent = 'Price';
    productDetails.append(productPriceTitle);
  
    let productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$ ${product.price}`;
    productDetails.append(productPrice);
  
    productItem.append(productImg);
    productItem.append(productDetails);
    productsArea.append(productItem);
  })
  }
  productFilters(products);
  let paidProducts = products.filter(item => {
    return item.price > 0
  })
  let freeProducts = products.filter(item => {
    return item.price === 0
  })
  
  document.querySelector('.products-filter label[for=all] .product-amount').textContent = products.length;
  document.querySelector('.products-filter label[for=paid] .product-amount').textContent = paidProducts.length;
  document.querySelector('.products-filter label[for=free] .product-amount').textContent = freeProducts.length;
  
  document.querySelector('.products-filter').addEventListener('click', function(e) {
    if(e.target.id === 'paid') {
      productFilters(paidProducts);
    } else if(e.target.id === 'free') {
      productFilters(freeProducts);
    } else {
      productFilters(products);
    }
  })
  // console.log(paidProducts);
  // console.log(freeProducts);
  
  