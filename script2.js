// script2.js — Data produk dan tampilan daftar
const PRODUCTS = [
  {
    id: 15,
    title: "Bauli Moonfils Starwberry",
    price: "2.00",
    category: "Food",
    // stock: 12,
    desc: "Roti dengan perisa Strawberry",
    images: ["https://evegro.com/wp-content/uploads/2020/10/PRO_Strawberry_moonfils_2-768x398.png",
      "https://i0.wp.com/evegro.com/wp-content/uploads/2021/08/veg-.png?fit=820%2C425&ssl=1",
    ],
            
      specs: {
    }
  },
  {
    id: 14,
    title: "Sunlight",
    price: "7.90",
    category: "Non-Food",
    // stock: 12,
    desc: "Sunlight cair 700ml, Aman untuk basuh buah dan sayur",
    images: ["https://down-id.img.susercontent.com/file/id-11134207-7ras8-m1p5nn72wf1a14"],
      specs: {
    }
  },
];

const grid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");

// Render produk ke halaman
function renderProducts(items) {
  grid.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${p.title}">     
      <div style="margin-top:10px">
        <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>${p.title}</h4>
            <div class="price">RM ${p.price}</div>
        </div>
            <div class="muted" style="font-size:13px;margin-top:6px">${p.desc}</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="lihatdetail" data-id="${p.id}" onclick="openModal(${p.id})">Lihat Detail</button>
      </div>
    `;
    grid.appendChild(card);
  });
  resultCount.textContent = items.length;
}

renderProducts(PRODUCTS);



// Filter dan sort
document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
document.getElementById("sortSelect").addEventListener("change", filterAndSort);
document.getElementById("searchBtn").addEventListener("click", filterAndSort);

function filterAndSort() {
  let filtered = [...PRODUCTS];
  const category = document.getElementById("categoryFilter").value;
  const search = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortSelect").value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (search) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(search));
  }

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  renderProducts(filtered);
}
