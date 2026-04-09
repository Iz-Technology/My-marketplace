// script2.js — Data produk dan tampilan daftar
const PRODUCTS = [
{
    id: 100,
    title: "Mi Sedaap All variant",
    price: "5.90",
    category: "Food",
    // stock: 12,
    desc: "Mie Sedaap adalah salah satu merek mie instan terkemuka yang terbuat dari bahan-bahan berkualitas dan rempah-rempah alami serta dilengkapi dengan formulasi bumbu yang tepat.",
    images: [src="https://down-my.img.susercontent.com/file/sg-11134201-23010-6369js3viomv44",
    ],
            
      specs: {
    }
  },

  {
    id: 1,
    title: "Maggi Kari",
    price: "5.90",
    category: "Food",
    // stock: 12,
    desc: "MAGGI 2-Minute Noodles Curry menggunakan campuran 12 rempah khas yang membuat hidangan kari yang disukai oleh orang Malaysia. ",
    images: [src="https://down-my.img.susercontent.com/file/my-11134207-7r98v-llx7j6x19zo3a0",
    ],
            
      specs: {
    }
  },
  
  {
    id: 2,
    title: "Chocopie",
    price: "4.90",
    category: "Food",
    // stock: 12,
    desc: "Nikmati kelezatan Lotte Choco Pie dari kombinasi Chocolate yang berkualitas, Softcake yang lembut dan Marshmallow yang fluffy di setiap gigitannya. Snack yang pas untuk dinikmati bersama dengan keluarga anda. Lotte Choco Pie mempersembahkan Tiga Kelezatan dalam Satu Kehangatan.",
    images: [src="https://i.pinimg.com/originals/fc/92/70/fc927056b64a7a75ef7f82ee28423a7f.jpg",
    ],
            
      specs: {
    }
  },
  {
    id: 3,
    title: "Dairy Champ 1kg",
    price: "7.40",
    category: "Food",
    // stock: 12,
    desc: "Susu kental manis",
    images: [src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/20/a567a3bf-57d5-4a45-9eb7-f3e803d94a14.png",
    ],
            
      specs: {
    }
  },
  {
    id: 15,
    title: "Bauli Moonfils All Variant",
    price: "2.00",
    category: "Food",
    // stock: 12,
    desc: "Roti dengan perisa Strawberry",
    images: [src="https://down-my.img.susercontent.com/file/my-11134207-7r990-lv21v8mbghmte9.webp",
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
