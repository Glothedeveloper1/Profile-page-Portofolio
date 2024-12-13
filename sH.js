document.addEventListener("DOMContentLoaded", function() {
  let cart = [];
  const cartList = document.getElementById("cartList");
  const totalPriceDisplay = document.getElementById("totalPrice");

  function renderCart() {
    cartList.innerHTML = ""; // Clear current cart display
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove";
      deleteButton.classList.add("deleteButton");
      deleteButton.onclick = () => removeFromCart(index);

      li.appendChild(deleteButton);
      cartList.appendChild(li);
    });
    updateTotalPrice();
  }

  function addToCart(name, price) {
    if (cart.some(item => item.name === name)) {
      alert("Item is already in the cart.");
      return;
    }
    cart.push({ name, price: parseFloat(price) });
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1); // Remove item by index
    renderCart();
  }

  function updateTotalPrice() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }

  )

  document.querySelectorAll(".addButton").forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-name");
      const itemPrice = button.getAttribute("data-price");
      addToCart(itemName, itemPrice);
    });
  });
});
