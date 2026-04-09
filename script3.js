// script3.js — Modal produk
const modalBackdrop = document.getElementById("modalBackdrop");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
// const modalStock = document.getElementById("modalStock");
const modalCategory = document.getElementById("modalCategory");
const modalDesc = document.getElementById("modalDesc");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalSpecs = document.getElementById("modalSpecs");
const whatsappBtn = document.getElementById("whatsappBtn");

function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  // Isi data utama
  modalTitle.textContent = product.title;
  modalPrice.innerHTML = `
  ${
    Array.isArray(product.price)
      ? `RM ${product.price[0]}<br><small>RM ${product.price[1]}</small>`
      : `RM ${product.price}`
  }
`;
//   modalStock.textContent = product.stock;
modalCategory.textContent = product.category;
  modalDesc.textContent = product.desc;

  // Gambar utama
  modalImage.src = product.images[0];
  modalThumbnails.innerHTML = "";

  product.images.forEach(img => {
  const thumb = document.createElement("img");
  thumb.src = img;
  thumb.className = "modal-thumb";
  thumb.addEventListener("click", () => (modalImage.src = img));
  modalThumbnails.appendChild(thumb);
});


  // 💡 Tambahan: Spesifikasi produk
  modalSpecs.innerHTML = "";
  if (product.specs) {
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.marginTop = "10px";
    table.style.borderCollapse = "collapse";

    for (const [key, value] of Object.entries(product.specs)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="font-weight:600; padding:6px; border-bottom:1px solid #ddd; width:35%;">${key}</td>
        <td style="padding:6px; border-bottom:1px solid #ddd;">${value}</td>
      `;
      table.appendChild(row);
    }

    modalSpecs.appendChild(table);
  } else {
    modalSpecs.innerHTML = `<p style="font-size:13px; color:#888; margin-top:8px;">Tidak ada spesifikasi detail untuk produk ini.</p>`;
  }

  // Tombol WhatsApp

   whatsappBtn.onclick = function (event) {
  event.preventDefault();

  const phoneNumber = "601125214211";
  const message = 
`Halo!
Saya ingin bertanya tentang:
📱 *${product.title}*
💰 RM ${product.price}
Apakah masih tersedia?`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};


  // Tampilkan modal
  modalBackdrop.style.display = "flex";
}

document.getElementById("closeModalBtn").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) closeModal();
});

function closeModal() {
  modalBackdrop.style.display = "none";
}
