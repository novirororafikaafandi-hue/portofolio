// ===== JavaScript Dasar - Profile Afika ♡ =====
// Dipanggil setelah halaman dimuat

document.addEventListener("DOMContentLoaded", function () {
    console.log("Halo Afika! JavaScript berhasil terhubung ♡");

    // ---------- 1. Salam otomatis berdasarkan waktu ----------
    const salamEl = document.getElementById("salam-waktu");
    const jamSekarang = new Date().getHours();
    let salam = "Halo! Selamat datang ♡";

    if (jamSekarang >= 5 && jamSekarang < 11) {
        salam = "🌞 Selamat pagi! Semangat belajar hari ini ♡";
    } else if (jamSekarang >= 11 && jamSekarang < 15) {
        salam = "☀️ Selamat siang! Jangan lupa istirahat ♡";
    } else if (jamSekarang >= 15 && jamSekarang < 19) {
        salam = "🌤️ Selamat sore! Gimana belajarmu hari ini? ♡";
    } else {
        salam = "🌙 Selamat malam! Waktunya review coding ♡";
    }
    salamEl.textContent = salam;

    // ---------- 2. Jam digital berjalan ----------
    const jamEl = document.getElementById("jam");
    function updateJam() {
        const sekarang = new Date();
        const jam = String(sekarang.getHours()).padStart(2, "0");
        const menit = String(sekarang.getMinutes()).padStart(2, "0");
        const detik = String(sekarang.getSeconds()).padStart(2, "0");
        jamEl.textContent = jam + ":" + menit + ":" + detik;
    }
    updateJam();
    setInterval(updateJam, 1000); // update tiap 1 detik

    // ---------- 3. Tahun otomatis di footer ----------
    document.getElementById("tahun").textContent = new Date().getFullYear();

    // ---------- 4. Penghitung klik tombol (biar seru!) ----------
    let jumlahKlik = 0;
    const jumlahKlikEl = document.getElementById("jumlah-klik");
    function tambahKlik() {
        jumlahKlik++;
        jumlahKlikEl.textContent = jumlahKlik;
    }

    // ---------- 5. Input nama -> sapa balik ----------
    const btnSapa = document.getElementById("btn-sapa");
    const inputNama = document.getElementById("input-nama");
    const hasilSapa = document.getElementById("hasil-sapa");

    btnSapa.addEventListener("click", function () {
        tambahKlik();
        const nama = inputNama.value.trim();
        if (nama === "") {
            hasilSapa.textContent = "Isi dulu namamu yaa 🎀";
        } else {
            hasilSapa.textContent = "Halo " + nama + "! Senang kenalan denganmu ♡ Aku Afika!";
            hujanHati(); // kasih efek hati
        }
    });

    // Bisa juga tekan Enter
    inputNama.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            btnSapa.click();
        }
    });

    // ---------- 6. Ganti quote ----------
    const quotes = [
        '"Belajar sedikit demi sedikit, lama-lama jadi jago! ♡"',
        '"Jangan takut error, error itu guru terbaik! 💻"',
        '"Coding itu seperti masak, coba resep baru tiap hari! 🥘"',
        '"Desain yang cantik dimulai dari satu baris kode 🎨"',
        '"Tetap semangat, calon programmer hebat! ✨"'
    ];
    let indexQuote = 0;
    const quoteEl = document.getElementById("quote");
    document.getElementById("btn-quote").addEventListener("click", function () {
        tambahKlik();
        indexQuote = (indexQuote + 1) % quotes.length;
        quoteEl.textContent = quotes[indexQuote];
    });

    // ---------- 7. Dark Mode 🌙 ----------
    const btnTema = document.getElementById("btn-tema");

    // Cek tema tersimpan
    if (localStorage.getItem("tema") === "gelap") {
        document.body.classList.add("dark-mode");
        btnTema.textContent = "☀️ Light Mode";
    }

    btnTema.addEventListener("click", function () {
        tambahKlik();
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            btnTema.textContent = "☀️ Light Mode";
            localStorage.setItem("tema", "gelap");
        } else {
            btnTema.textContent = "🌙 Dark Mode";
            localStorage.setItem("tema", "terang");
        }
    });

    // ---------- 8. Tambah hobi ----------
    document.getElementById("btn-hobi").addEventListener("click", function () {
        tambahKlik();
        const daftarHobi = document.getElementById("daftar-hobi");
        const hobiBaru = document.createElement("li");
        hobiBaru.textContent = "🎮 Main Game";
        daftarHobi.appendChild(hobiBaru);
        this.disabled = true; // biar tidak dobel
        this.textContent = "Hobi ditambahkan! ♡";
    });

    // ---------- 9. Target belajar bisa dicentang ----------
    const targets = document.querySelectorAll(".target");
    const progressEl = document.getElementById("progress-belajar");

    function updateProgress() {
        const selesai = document.querySelectorAll(".target.selesai").length;
        progressEl.textContent = "Progress: " + selesai + " dari " + targets.length + " target selesai! 🎀";
    }

    targets.forEach(function (target) {
        target.style.cursor = "pointer";
        target.addEventListener("click", function () {
            tambahKlik();
            target.classList.toggle("selesai");
            updateProgress();
        });
    });
    updateProgress();

    // ---------- 10. Tombol Halo + hujan hati ----------
    document.getElementById("btn-halo").addEventListener("click", function () {
        tambahKlik();
        alert("Halo! Terima kasih sudah mampir ke profil Afika ♡");
        hujanHati();
    });

    // Pesan kenalan
    const pesanKenalan = document.getElementById("pesan-kenalan");
    document.querySelector('a[href="#kontak"]').addEventListener("click", function () {
        pesanKenalan.textContent = "Yeay! Scroll ke bawah ya, Afika tungguin ♡";
    });

    // ---------- 11. Efek hujan hati 💗 ----------
    function hujanHati() {
        for (let i = 0; i < 15; i++) {
            const hati = document.createElement("span");
            hati.textContent = "💗";
            hati.className = "hati-jatuh";
            hati.style.left = Math.random() * 100 + "vw";
            hati.style.animationDuration = (Math.random() * 2 + 2) + "s";
            document.body.appendChild(hati);

            // Hapus setelah 3 detik biar tidak menumpuk
            setTimeout(function () {
                hati.remove();
            }, 3000);
        }
    }
});
