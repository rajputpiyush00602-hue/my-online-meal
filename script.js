

let cart = [];

function addToCart(name, price) {

    let item = cart.find(food => food.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerText = 0;
        return;
    }

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        totalPrice += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: ₹${itemTotal}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    total.innerText = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Please add food to cart first.");
        return;
    }

    alert("Your order has been placed successfully!");

    cart = [];
    displayCart();
}



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Your details have been submitted successfully!");

    this.reset();
});