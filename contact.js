
// SPLASH CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);

  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();
  const message = formData.get("message").trim();

  const recipient = "splashthebrand@gmail.com";

  const subject = encodeURIComponent(
    "Contact Form Message from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n\n" +
    "Message:\n" + message
  );

  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;

  window.location.href = mailtoLink;

  formStatus.textContent =
    "Your email application will open to send the message.";
});
