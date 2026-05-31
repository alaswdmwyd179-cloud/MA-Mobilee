let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert("تمت إضافة المنتج إلى السلة");
}

function updateCart() {
  let cartCount = document.getElementById("cartCount");
  let cartItems = document.getElementById("cartItems");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  if (!cartItems) {
    return;
  }

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>السلة فارغة حاليًا.</p>";
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(function(item) {
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item}
      </div>
    `;
  });
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

updateCart();
function searchPhones() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let phones = document.querySelectorAll(".phone-product");

  phones.forEach(function(phone) {
    let text = phone.innerText.toLowerCase();

    if (text.includes(input)) {
      phone.style.display = "block";
    } else {
      phone.style.display = "none";
    }
  });
}