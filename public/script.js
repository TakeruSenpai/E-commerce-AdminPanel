const form = document.getElementById("productForm");
const productList = document.getElementById("productList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    stock: document.getElementById("stock").value,
    description: document.getElementById("description").value,
  };

  await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  form.reset();
  loadProducts();
});

async function loadProducts() {
  const res = await fetch("/api/products");
  const products = await res.json();

  productList.innerHTML = "";

  products.forEach((p) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>Category: ${p.category || "—"}</p>
      <p>Stock: ${p.stock}</p>
      <p>${p.description || ""}</p>
      <small>ID: ${p._id}</small>
    `;

    productList.appendChild(div);
  });
}

loadProducts();
