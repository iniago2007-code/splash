
// SPLASH PRODUCT DETAILS PAGE

const mainProductImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumbnail");

const decreaseBtn = document.getElementById("decreaseQty");
const increaseBtn = document.getElementById("increaseQty");
const quantityValue = document.getElementById("quantityValue");

const colourButtons = document.querySelectorAll("[data-colour]");
const sizeButtons = document.querySelectorAll("[data-size]");

const payBtn = document.getElementById("payBtn");

// PRODUCT INFORMATION
const selectedProduct = {
  id: 104,
  name: "Line Tee short Dress",
  price: 7000,
  image: "images/buy-main.jpg",
  quantity: 2,
  colour: "Brown",
  size: "S"
};

// IMAGE GALLERY
thumbnails.forEach(button => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    mainProductImage.src = image;
  });
});

// QUANTITY CONTROLS
function updateQuantity() {
  quantityValue.textContent = selectedProduct.quantity;
}

decreaseBtn.addEventListener("click", () => {
  if (selectedProduct.quantity > 1) {
    selectedProduct.quantity--;
    updateQuantity();
  }
});

increaseBtn.addEventListener("click", () => {
  selectedProduct.quantity++;
  updateQuantity();
});

// COLOUR SELECTION
colourButtons.forEach(button => {
  button.addEventListener("click", () => {
    colourButtons.forEach(btn => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedProduct.colour = button.dataset.colour;
  });
});

// SIZE SELECTION
sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    sizeButtons.forEach(btn => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedProduct.size = button.dataset.size;
  });
});

// PAY BUTTON
payBtn.addEventListener("click", () => {
  localStorage.setItem(
    "splashSelectedProduct",
    JSON.stringify(selectedProduct)
  );

  // The checkout page is not built yet.
  // Payment processing will be connected later.
  alert("Product selection saved. Checkout page coming next.");
});

// INITIAL DISPLAY
updateQuantity();



payBtn.addEventListener("click", () => {
  localStorage.setItem(
    "splashSelectedProduct",
    JSON.stringify(selectedProduct)
  );

  window.location.href = "information.html";
});
