// Data produk
const items = [
    ['001', 'XIOMI 13T', 6500000, 'Hp Flagship, collab dengan Leica', '13T.jpg'],
    ['002', 'INFINIX NOTE 40PRO', 3000000, 'Hp Murah dan Terjangkau', 'INFINIX.webp'],
    ['003', 'LG', 5000000, 'Hp merek Lg', 'LG.jpg'],
    ['004', 'SONY', 3000000, 'Kamera yang bagus', 'SONY.jpg']
];

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Fungsi menampilkan produk
function displayItems(itemsList) {
    const listBarang = document.getElementById('listBarang');
    if (!listBarang) return;

    listBarang.innerHTML = '';
    itemsList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-3 mb-3';
        card.innerHTML = `
            <div class="card">
                <img src="${item[4]}" class="card-img-top" alt="${item[1]}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5>${item[1]}</h5>
                    <p>${item[3]}</p>
                    <p>Rp ${item[2].toLocaleString()}</p>
                    <button class="btn btn-primary addCart" data-id="${item[0]}" data-name="${item[1]}" data-price="${item[2]}">Tambahkan ke Keranjang</button>
                </div>
            </div>`;
        listBarang.appendChild(card);
    });
}
displayItems(items);

// Pencarian produk
document.getElementById('formItem').addEventListener('submit', function (event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const filteredItems = items.filter(item => item[1].toLowerCase().includes(keyword));
    displayItems(filteredItems);
});

// Tambahkan ke keranjang
document.getElementById('listBarang').addEventListener('click', function (event) {
    if (event.target.classList.contains('addCart')) {
        const id = event.target.getAttribute('data-id');
        const name = event.target.getAttribute('data-name');
        const price = parseInt(event.target.getAttribute('data-price'));
        cartItems.push({ id, name, price });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Perbarui tampilan
        updateCartStatus();
    }
});

// Perbarui status tombol Keranjang dan Checkout
function updateCartStatus() {
    const cartButton = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');
    cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i> Keranjang (${cartItems.length})`;

    if (cartItems.length > 0) {
        checkoutButton.disabled = false;
    } else {
        checkoutButton.disabled = true;
    }
}

// Inisialisasi status tombol
updateCartStatus();
