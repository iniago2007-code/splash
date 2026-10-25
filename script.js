
// SPLASH WEBSITE - SHARED JAVASCRIPT

// HOME PAGE PRODUCTS
const homeProducts = [
  {
    id: 1,
    name: "Clous Montori Playsuit",
    price: 50000,
    image: "images/product-1.jpg"
  },
  {
    id: 2,
    name: "Clous Montori Jumpsuit",
    price: 75000,
    image: "images/product-2.jpg"
  },
  {
    id: 3,
    name: "Short Gabardine Gown",
    price: 12000,
    image: "images/product-3.jpg"
  },
  {
    id: 4,
    name: "Clous Corporate Wear",
    price: 52000,
    image: "images/product-4.jpg"
  }
];

// SHOP PAGE PRODUCTS
const shopProducts = [
  {
    id: 101,
    name: "Fur Tote Dress",
    price: 30000,
    image: "images/shop-1.jpg"
  },
  {
    id: 102,
    name: "Fur Tote Dress",
    price: 40000,
    image: "images/shop-2.jpg"
  },
  {
    id: 103,
    name: "Strapless Dress",
    price: 10000,
    image: "images/shop-3.jpg"
  },
  {
    id: 104,
    name: "Line Tie Short Dress",
    price: 7000,
    image: "images/shop-4.jpg"
  },
  {
    id: 105,
    name: "Strapless Dress",
    price: 20000,
    image: "images/shop-5.jpg"
  },
  {
    id: 106,
    name: "Tess Ball Gown",
    price: 12000,
    image: "images/shop-6.jpg"
  },
  {
    id: 107,
    name: "Strapless Dress",
    price: 7000,
    image: "images/shop-7.jpg"
  },
  {
    id: 108,
    name: "Dim Floral Dress",
    price: 19000,
    image: "images/shop-8.jpg"
  }
];

// COMBINE ALL PRODUCTS
const products = [...homeProducts, ...shopProducts];

// GET HTML ELEMENTS
const cartCount = document.getElementById("cartCount");
const cartButtons = document.querySelectorAll(".cart-btn");
const buyButtons = document.querySelectorAll(".buy-btn");

// LOAD CART
let cart = [];

try {
  const savedCart = JSON.parse(
    localStorage.getItem("splashCart") || "[]"
  );

  if (Array.isArray(savedCart)) {
    cart = savedCart;
  }
} catch (error) {
  console.error("Unable to load cart:", error);
  cart = [];
}

// UPDATE CART COUNT
function updateCartCount() {
  const total = cart.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),
    0
  );

  if (cartCount) {
    cartCount.textContent = total;
    cartCount.hidden = total === 0;
  }
}

// ADD PRODUCT TO CART
function addToCart(productId) {
  const product = products.find(
    item => item.id === productId
  );

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  const existingProduct = cart.find(
    item => item.id === productId
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  localStorage.setItem(
    "splashCart",
    JSON.stringify(cart)
  );

  updateCartCount();
}

// ADD TO CART BUTTONS
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.product);

    addToCart(productId);

    const originalText = button.textContent;

    button.textContent = "Added!";

    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  });
});

// BUY NOW BUTTONS
buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.product);

    addToCart(productId);

    // Checkout functionality will be added later.
  });
});

// INITIALIZE CART COUNT
updateCartCount();











buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.product);

    // Remember which product was selected.
    localStorage.setItem(
      "splashBuyProductId",
      String(productId)
    );

    window.location.href = "buy.html";
  });
});

