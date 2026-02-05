function openOrder(product, price) {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("productName").value = product;
    document.getElementById("productPrice").value = price;
    window.scrollTo(0, document.body.scrollHeight);
}

function confirmOrder(event) {
    event.preventDefault();

    let product = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    let message = `AL-SHIFA Desi Ghee Order%0A
Product: ${product}%0A
Price: ${price} PKR%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Address: ${address}`;

    // WhatsApp
    window.open(`https://wa.me/923208627050?text=${message}`, '_blank');

    // Email
    window.location.href = `mailto:alshifa.food.official@gmail.com?subject=New Order - AL-SHIFA Desi Ghee&body=${message}`;
}
