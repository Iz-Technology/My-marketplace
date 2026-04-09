// script2.js — Data produk dan tampilan daftar
const PRODUCTS = [
  {
    id: 1,
    title: "Beras Wangi Cap Anggur",
    price: "51.00",
    category: "Food",
    // stock: 12,
    desc: "Pelbagai jenama Beras Putih kami menampilkan rasa unik beras import dan tempatan yang terhidang indah di pinggan anda. ",
    images: [src="https://bestamartsabah.com/wp-content/uploads/2024/07/SAZARICE-BERAS-WANGI-ANGGUR-KUNING-10KG.png",
    ],
            
      specs: {
    }
  },
{
    id: 2,
    title: "Beras super WR",
    price: "30.00",
    category: "Food",
    // stock: 12,
    desc: "Teksturnya yang padat dan berderai menjadikannya padanan sempurna dengan hidangan tempatan.",
    images: [src="https://bestamartsabah.com/wp-content/uploads/2024/10/SAZARICE-BERAS-SUPER-WR-5-10KG.png",
    ],
            
      specs: {
    }
  },

  {
    id: 3,
    title: "Eco Mineral Water 1L",
    price: ["1.50/Btl",
            "10.00/Ctn"],
    category: "Food",
    // stock: 12,
    desc: "Semestinya air yang bersih lagi menyegarkan. ",
    images: [src="https://distribuidorabelgrano.com/wp-content/uploads/2019/09/Captura-de-pantalla-2019-09-24-a-las-02.17.58-p.m.-e1569345648371.png",
    ],
            
      specs: {
    }
  },

{
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Chocopie",
    price: "4.90",
    category: "Food",
    // stock: 12,
    desc: "Nikmati kelezatan Choco Pie dari kombinasi Chocolate yang berkualitas, Softcake yang lembut dan Marshmallow yang fluffy di setiap gigitannya.",
    images: [src="https://i.pinimg.com/originals/fc/92/70/fc927056b64a7a75ef7f82ee28423a7f.jpg",
    ],
            
      specs: {
    }
  },
  {
    id: 7,
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
    id: 8,
    title: "Bauli Moonfils All Variant",
    price: "2.00",
    category: "Food",
    // stock: 12,
    desc: "Roti dengan pelbagai macam perisa ",
    images: [src="https://down-my.img.susercontent.com/file/my-11134207-7r990-lv21v8mbghmte9.webp",
    ],
            
      specs: {
    }
  },
  {
    id: 9,
    title: "Sunlight",
    price: "7.90",
    category: "Non-Food",
    // stock: 12,
    desc: "Sunlight cair 700ml, Aman untuk basuh buah dan sayur",
    images: ["https://down-id.img.susercontent.com/file/id-11134207-7ras8-m1p5nn72wf1a14"],
      specs: {
    }
  },
  {
    id: 10,
    title: "Bio Zip 2.3kg",
    price: "13.80",
    category: "Non-Food",
    // stock: 12,
    desc: "Sunlight cair 700ml, Aman untuk basuh buah dan sayur",
    images: ["https://down-my.img.susercontent.com/file/my-11134207-7r98u-lqleg1dvif5q37@resize_w900_nl.webp"],
      specs: {
    }
  },
  {
    id: 11,
    title: "Dugro 1-3 Tahun",
    price: "23.50",
    category: "Non-Food",
    // stock: 12,
    desc: "Dumex Dugro Step 3 Honey Growing Up Formula 1-3 Years (550g) (Susu, Milk Powder, 奶粉)",
    images: ["https://down-my.img.susercontent.com/file/my-11134207-7rase-m7qbzxd7g58714.webp"],
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
            <div class="price">
  ${
    Array.isArray(p.price)
      ? `RM ${p.price[0]}<br><small>RM ${p.price[1]}</small>`
      : `RM ${p.price}`
  }
</div>
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
