// Initialize EmailJS
(function(){
    emailjs.init("IkmUL78Og3fJsuiHb"); // Tumhara public key
})();

// Function to open the order form and set product
function setOrder(product, price){
    const formSection = document.querySelector(".order-form");
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");

    if(formSection && productNameInput && productPriceInput){
        productNameInput.value = product;
        productPriceInput.value = price;
        formSection.style.display = "block";  // Show form
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        console.error("Order form elements not found!");
    }
}

// Handle form submission
document.addEventListener("DOMContentLoaded", function(){
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function(e){
        e.preventDefault();

        const quantitySelect = document.getElementById("quantityOption");
        const otherQtyInput = document.getElementById("otherQuantity");

        // Quantity validation
        if(quantitySelect.value === "Other"){
            if(otherQtyInput.value === "" || parseInt(otherQtyInput.value) <= 0){
                alert("Please enter a valid quantity in grams.");
                return;
            }
            document.querySelector('input[name="other_quantity"]').value = otherQtyInput.value + " grams";
        } else {
            document.querySelector('input[name="other_quantity"]').value = "";
        }

        // Send form via EmailJS
        emailjs.sendForm(
            "service_tagl8nd",   // Service ID
            "template_4qqk9mu",  // Template ID
            this                  // Form element
        ).then(function(){
            alert("Order submitted successfully! We will contact you soon.");
            orderForm.reset();
            document.getElementById("orderFormContainer").style.display = "none";
        }, function(error){
            console.error(error);
            alert("Oops! Something went wrong. Please try again.");
        });
    });
});
