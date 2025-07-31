const products = [
    {
        name: "Smart Watch",
        price: 2499,
        image: "images/smartwatch.jpg" 
    },
    {
        name: "Wireless Earbuds",
        price: 1299,
        image: "images/earbuds.jpg"
    },
    {   
        name: "Blutooth Speaker",
        price: 1599,
        image: "images/speaker.jpg"
    }
];
 const productSection =
 document.querySelector('.products');

 products.forEach(product => {
    const div = 
document.createElement('div');
    div.classList.add('product');
    div.innerHTML =`
      <img src="${product.image}"
alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.pricce.toLocaleString()}</p>
      <button class = "add-to-cart">Add to Cart</button>`;
      
      productSection.appendChild(div);
 });

document.addEventListener('click',
function(e) {
    if 
    (e.target.classList.contains(add-to-cart)) {
        const productName = 
e.target.previousElementSibling.previousElementSibling.textContent;
        const message = ` Thank you for adding <strong>${productName}</strong> to your cart!`;
        const thankYou =
document.getElementById('thankyou-message');
        thankYou.innerHTML = message;
        setTimeout(() => {
            thankYou.innerHTML = '';
        }, 3000);
    }
});
document.getElementById("contact-form").addEventListener("submit",function(e) {
    e.preventDefault();
    alert("Thank you! we'll get back to you soon.");
    this.requestFullscreen();
});
function addToCart(productName) {
    alert(productName +  " has been added to your cart!");
     
    const messageDiv =
document.getElementById('thankyou-message');
    messageDiv.innerText = "Thank you for shopping with TechnoCart!";
}
 