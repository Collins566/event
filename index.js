// Newsletter Form

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
newsletterForm.addEventListener("submit", function (e) {
e.preventDefault();
alert("Thank you for subscribing to EventHub!");
newsletterForm.reset();
});
}

// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function (e) {
e.preventDefault();

```
const name = document.getElementById("name");

if (name) {
  alert("Thank you " + name.value + "! Your message has been sent.");
} else {
  alert("Your message has been sent.");
}

contactForm.reset();
```

});
}

// Event Registration Buttons

const buttons = document.querySelectorAll(".event-card button");

buttons.forEach(function(button) {
button.addEventListener("click", function() {
alert("Registration successful!");
});
});
