let allProducts = [];

async function getdata() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    allProducts = products;

    loadCategories(products);
    displayProducts(products);
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products.forEach(product => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}">
      <div class="product-title">${product.title}</div>
      <div class="product-price">$${product.price}</div>
      <div class="product-description">${product.description}</div>
      <button class="cart-btn" onclick="addToCart('${product.id}')">Add To Cart</button>
    `;

    container.appendChild(card);
  });
}

function loadCategories(products) {
  const categorySelect = document.getElementById("categorySelect");
  let categories = [...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    let option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.toUpperCase();
    categorySelect.appendChild(option);
  });
}

function filterProducts() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categorySelect").value;

  const filtered = allProducts.filter(p =>
    (selectedCategory === "all" || p.category === selectedCategory) &&
    p.title.toLowerCase().includes(searchValue)
  );

  displayProducts(filtered);
}

function addToCart(id) {
  alert(`Product ${id} added to cart!`);
}

getdata();

