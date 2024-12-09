<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Mini Ecommerce</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Mini Ponsel</a>
        </div>
    </nav>

    <div class="container mt-4">
        <h3>Keranjang Belanja</h3>
        <div id="cartItemsList" class="row"></div>

        <h4>Total Pembayaran: <span id="totalPrice">Rp 0</span></h4>

        <button class="btn btn-success" id="confirmPurchase">Konfirmasi Pembelian</button>
    </div>

    <script>
        // Ambil data keranjang dari localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        function displayCartItems() {
            const cartItemsList = document.getElementById('cartItemsList');
            const totalPrice = document.getElementById('totalPrice');

            // Hapus isi keranjang sebelumnya
            cartItemsList.innerHTML = '';

            if (cartItems.length === 0) {
                cartItemsList.innerHTML = '<p>Keranjang belanja Anda kosong.</p>';
                totalPrice.innerText = 'Rp 0';
                return;
            }

            let total = 0;

            // Menampilkan setiap item di keranjang
            cartItems.forEach((item, index) => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';

                // Membuat card hanya dengan nama produk, deskripsi dan harga
                const row = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Rp ${item.price.toLocaleString()}</p>
                            <button class="btn btn-danger btn-sm removeItem" data-index="${index}">Hapus</button>
                        </div>
                    </div>
                `;

                col.innerHTML = row;
                cartItemsList.appendChild(col);
                total += item.price;
            });

            totalPrice.innerText = `Rp ${total.toLocaleString()}`;
        }

        // Hapus item dari keranjang
        document.getElementById('cartItemsList').addEventListener('click', function(event) {
            if (event.target.classList.contains('removeItem')) {
                const index = event.target.getAttribute('data-index');
                cartItems.splice(index, 1); // Hapus item dari array cartItems
                localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Simpan perubahan ke localStorage
                displayCartItems(); // Update tampilan keranjang
            }
        });

        // Tampilkan keranjang saat halaman dimuat
        displayCartItems();

        // Konfirmasi pembelian
        document.getElementById('confirmPurchase').addEventListener('click', function() {
            if (cartItems.length === 0) {
                alert('Keranjang belanja kosong!');
                return;
            }

            // Proses pembelian (misalnya, ke server atau simpan data pembelian)
            alert('Pembelian berhasil!');

            // Kosongkan keranjang setelah pembelian berhasil
            cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Reset keranjang di localStorage
            displayCartItems(); // Perbarui tampilan keranjang
        });
    </script>
</body>
</html>
