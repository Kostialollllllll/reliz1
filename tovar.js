// Функція для відображення товарів у кошику
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Очищаємо перед оновленням
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Ваш кошик порожній</p>';
        cartTotal.innerHTML = '';
        return;
    }
    
    let total = 0;
    let itemsHTML = '';
    
    cart.forEach((item, index) => {
        total += item.price;
        itemsHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>${item.price} грн</p>
                <button onclick="removeFromCart(${index})">Видалити</button>
            </div>
        `;
    });
    
    cartItems.innerHTML = itemsHTML;
    cartTotal.innerHTML = `<h3>Загальна сума: ${total} грн</h3>`;
}

// Функція для видалення товару з кошика
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Оновлюємо відображення
}

// Функція для оформлення замовлення
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Ваш кошик порожній!');
        return;
    }
    
    alert('Замовлення оформлено! Дякуємо за покупку!');
    localStorage.removeItem('cart');
    displayCartItems();
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    
    // Додаємо обробник кнопки оформлення
    document.getElementById('checkout-btn').addEventListener('click', checkout);
});