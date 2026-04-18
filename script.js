let dataBarang = [];
let idCounter = 1;

const form = document.getElementById("formBarang");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    tambahBarang();
});

// Tambah data
function tambahBarang() {
    const nama = document.getElementById("namaBarang").value;
    const jumlah = document.getElementById("jumlahBarang").value;
    const kategori = document.getElementById("kategoriBarang").value;

    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua field harus diisi!");
        return;
    }

    const barang = {
        id: idCounter++,
        nama: nama,
        jumlah: jumlah,
        kategori: kategori
    };

    dataBarang.push(barang);
    tampilkanData();
    form.reset();
}

// Badge warna kategori
function getBadge(kategori) {
    if (kategori === "Elektronik") return '<span class="badge-elektronik">Elektronik</span>';
    if (kategori === "ATK") return '<span class="badge-atk">ATK</span>';
    if (kategori === "Furniture") return '<span class="badge-mebel">Furniture</span>';
}

// Tampilkan data
function tampilkanData() {
    const tabel = document.getElementById("tabelBarang");
    tabel.innerHTML = "";

    dataBarang.forEach((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.jumlah}</td>
                <td>${getBadge(item.kategori)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="hapusBarang(${item.id})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}

// Hapus data   
function hapusBarang(id) {
    dataBarang = dataBarang.filter(item => item.id !== id);
    tampilkanData();
}