
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const cartThumbnail = document.querySelector('.cart-thumbnail img');
    const itemCount = document.querySelector('.item-count');
    let count = parseInt(itemCount.textContent, 10);
    count += 1;
    itemCount.textContent = count;
   
    // Add animation class
    cartThumbnail.classList.add('animate');

    // Remove animation class after animation ends
    cartThumbnail.addEventListener('animationend', function() {
        cartThumbnail.classList.remove('animate');
    });
});

