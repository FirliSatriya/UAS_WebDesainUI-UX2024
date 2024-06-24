// Select the 'Add to Cart' button
const addToCartButton = document.querySelector('.cart');

// Add an event listener to the button
addToCartButton.addEventListener('click', function(event) {
    // Prevent the default action (navigating to a different page)
    event.preventDefault();

    // Logic to add the item to the cart
    addToCart();

    // Notify the user
    alert('Item added to cart!');
});

// Function to add the item to the cart
function addToCart() {
    // Here you can add your logic to add the item to the cart
    // For example, you can use localStorage to store cart items
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    // Add a sample item to the cart
    const item = {
        id: 1,
        name: 'Sample Item',
        price: 10.00
    };
    cart.push(item);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

