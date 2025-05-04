
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Ваш кошик порожній</div>';
        cartTotalContainer.textContent = '';
        checkoutBtn.style.display = 'none';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price} грн</span>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });
        
        cartTotalContainer.textContent = `Загальна сума: ${total} грн`;
        
        checkoutBtn.addEventListener('click', function() {
            alert('Замовлення оформлено! Дякуємо за покупку.');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
});
