document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.parentElement;
        const productName = product.querySelector('h2').textContent;

        const cartItem = document.createElement('li');
        cartItem.textContent = productName;
        cartItemsList.appendChild(cartItem);
    }
});