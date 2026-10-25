
// SPLASH SHIPPING PAGE

const shippingContact = document.getElementById("shippingContact");
const shippingDestination = document.getElementById("shippingDestination");
const continuePayment = document.getElementById("continuePayment");

let shippingInfo = null;

try {
  shippingInfo = JSON.parse(
    sessionStorage.getItem("splashCheckoutShipping") || "null"
  );
} catch (error) {
  console.error("Unable to load shipping details:", error);
}

if (shippingInfo) {
  shippingContact.textContent =
    shippingInfo.phone || "";

  shippingDestination.textContent = [
    shippingInfo.address,
    shippingInfo.apartment,
    shippingInfo.state,
    shippingInfo.country
  ].filter(Boolean).join(", ");
} else {
  shippingContact.textContent = "Not provided";
  shippingDestination.textContent = "Not provided";
}

continuePayment.addEventListener("click", () => {
  if (!shippingInfo) {
    window.location.href = "information.html";
    return;
  }

  sessionStorage.setItem(
    "splashShippingMethod",
    JSON.stringify({
      name: "10–15 working days",
      price: 20000
    })
  );

  window.location.href = "payment.html";
});
