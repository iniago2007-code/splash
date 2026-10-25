
// SPLASH CHECKOUT INFORMATION

const informationForm = document.getElementById("informationForm");
const saveInfoCheckbox = document.getElementById("saveInfo");

const paypalBtn = document.getElementById("paypalBtn");
const paystackBtn = document.getElementById("paystackBtn");

// RESTORE SAVED SHIPPING INFORMATION
try {
  const saved = JSON.parse(
    localStorage.getItem("splashShippingInfo") || "null"
  );

  if (saved && typeof saved === "object") {
    Object.keys(saved).forEach(key => {
      const field = informationForm.elements.namedItem(key);

      if (field && key !== "saveInfo") {
        field.value = saved[key];
      }
    });
  }
} catch (error) {
  console.error("Could not load saved information:", error);
}

// FORM SUBMISSION
informationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!informationForm.reportValidity()) {
    return;
  }

  const formData = new FormData(informationForm);

  const shippingInfo = {
    country: formData.get("country"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    apartment: formData.get("apartment"),
    state: formData.get("state")
  };

  // Save current checkout data for the next page.
  sessionStorage.setItem(
    "splashCheckoutShipping",
    JSON.stringify(shippingInfo)
  );

  // Remember for future visits only when selected.
  if (saveInfoCheckbox.checked) {
    localStorage.setItem(
      "splashShippingInfo",
      JSON.stringify(shippingInfo)
    );
  } else {
    localStorage.removeItem("splashShippingInfo");
  }

  // Next page in the checkout process
  window.location.href = "shipping.html";
});

// PAYMENT PROVIDER PLACEHOLDERS
paypalBtn.addEventListener("click", () => {
  alert("PayPal checkout is not connected yet.");
});

paystackBtn.addEventListener("click", () => {
  alert("Paystack checkout is not connected yet.");
});

