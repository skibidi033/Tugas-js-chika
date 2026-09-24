/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Selamat Datang di Sistem Poin Member!")



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI= "kopi PSTI Kampus";

// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let namaKasir = "Kak Eko";
let shiftKerja = "Sore";

// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Nama Kedai = " + NAMA_KEDAI);
console.log("Nama Kasir = " + namaKasir);
console.log("Shift Kerja = " + shiftKerja);



// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
namaKasir = "Kak James";

// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Perubahan Kasir : " + namaKasir);



// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang di Kopi PSTI Kampus!");

// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let namaPelanggan = prompt("Siapa namamu?");

// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if (namaPelanggan) {
    alert("Selamat Datang, " + namaPelanggan + "!");
    console.log("Pelanggan : " + namaPelanggan);
} else {
    namaPelanggan = "Pelanggan setia";
    alert("Selamat Datang Pelanggan Setia!");
    console.log("Pelanggan : " + namaPelanggan);
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let poinKopi = "45";
let poinMakanan = "35";
let poinMerchandise = "20";

// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let totalPoin = poinKopi + poinMakanan + poinMerchandise;

// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("Poin Kopi : " + poinKopi);
console.log("Poin Makanan : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin : " + totalPoin);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
let tierMember = "";
let benefit = "";

// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
if (totalPoin >= 100) {
    tierMember = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature"
} else if (totalPoin >= 70) {
    tierMember = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
    tierMember = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} else {
    tierMember = "Bronze"
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}

// 3. Cetak hasil tierMember dan benefit ke Console.
console.log("Tier Member : " + tierMember);
console.log("Benefit : " + benefit);

// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
alert(
    "Nama : " + namaPelanggan +
    "\nTotal Poin : " + totalPoin +
    "\nTier : " + tierMember +
    "\nBenefit: " + benefit
);



// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(p1, p2, p3) {
    let total = p1 + p2 + p3;
    return total;
}


// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function tentukanTierMember(poin) {
    if (poin >= 100) {
        return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
    } else if (poin >= 70) {
        return "Gold - Diskon 10% di setiap transaksi";
    } else if (poin >= 40) {
        return "Silver - Diskon 5% untuk menu minuman";
    } else {
        return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
    }
}


// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let totalPoinB = hitungTotalPoin(35, 25, 20);
let tierB = tentukanTierMember(totalPoinB);

console.log("=== PELANGGAN B ===");
console.log("Total Poin : " + totalPoinB);
console.log("Tier : " + tierB);


let totalPoinC = hitungTotalPoin(15, 10, 5);
let tierC = tentukanTierMember(totalPoinC);

console.log("=== PELANGGAN C ===");
console.log("Total Poin : " + totalPoinC);
console.log("Tier : " + tierC);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let menuRekomendasi = [
    "Caramel Macchiato",
    "Kopi Susu Gula Aren",
    "Croissant Butter Keju",
    "Matcha Cream Latte",
    "Cinnamon Roll Hangat"
];


// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
console.log("=== MENU REKOMENDASI UNTUK MEMBER ===");

for (let i = 0; i < menuRekomendasi.length; i++) {
    console.log((i + 1) + ". " + menuRekomendasi[i]);
}


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("Total Menu : " + menuRekomendasi.length);

console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
