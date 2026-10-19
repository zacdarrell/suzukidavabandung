document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    // 1. Fungsi Toggle Burger Menu Mobile
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // 2. Fungsi Klik Dropdown Khusus di Tampilan Mobile
    dropdownToggle.addEventListener('click', (e) => {
        // Hanya jalankan fungsi klik jika lebar layar di bawah 961px (Mobile/Tablet)
        if (window.innerWidth <= 960) {
            e.preventDefault(); // Mencegah link lompat ke atas halaman
            dropdown.classList.toggle('active');
        }
    });
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 4000; // Waktu pergantian gambar otomatis (4000ms = 4 detik)

function nextSlide() {
    // Hapus kelas 'active' dari slide dan dot saat ini
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Pindah ke slide berikutnya (kembali ke 0 jika sudah di ujung)
    currentSlide = (currentSlide + 1) % slides.length;

    // Tambahkan kelas 'active' ke slide dan dot yang baru
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Jalankan slider otomatis menggunakan interval waktu
let autoSlide = setInterval(nextSlide, slideInterval);

// Opsi Tambahan: Izinkan user mengklik titik indikator untuk pindah gambar
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Hapus kelas aktif lama
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Ganti ke slide yang diklik
        currentSlide = index;

        // Aktifkan slide baru
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Reset ulang timer otomatis agar tidak langsung berubah mendadak setelah diklik
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
    // Konfigurasi Intersection Observer untuk Animasi Masuk saat Scroll
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,          // Menggunakan viewport browser sebagai area deteksi
        rootMargin: '0px',   // Tidak ada margin tambahan
        threshold: 0.15      // Memicu animasi ketika 15% bagian elemen sudah masuk layar
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke area pandang layar
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Berhenti mengamati elemen ini setelah animasinya sukses terpicu sekali
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Daftarkan semua elemen ber-class .scroll-animate ke pengamat/observer
    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    
    const kreditForm = document.getElementById('kreditForm');

    if (kreditForm) {
        kreditForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop webpage from reloading

            // 1. Gather all inputs from form fields
            const tipeMobil = document.getElementById('tipeMobil').value;
            const namaLengkap = document.getElementById('namaLengkap').value;
            const alamat = document.getElementById('alamat').value;
            const rencanaDP = document.getElementById('rencanaDP').value;
            const tenor = document.getElementById('tenor').value;

            // 2. Define target phone number (Suzuki Sales WA)
            const targetPhone = "6285124488622";

            // 3. Construct nicely structured string for the text message
            const message = `*FORMULIR PENGAJUAN SIMULASI KREDIT SUZUKI*\n` +
                            `--------------------------------------------------\n\n` +
                            `🚗 *Tipe Mobil :* ${tipeMobil}\n` +
                            `👤 *Nama Lengkap :* ${namaLengkap}\n` +
                            `📍 *Alamat Rumah :* ${alamat}\n` +
                            `💰 *Rencana DP :* ${rencanaDP}\n` +
                            `📅 *Tenor Cicilan :* ${tenor}\n\n` +
                            `--------------------------------------------------\n` +
                            `_Mohon info rincian hitungan angsuran terbaiknya, terima kasih._`;

            // 4. Encode message for URL use cases
            const encodedMessage = encodeURIComponent(message);

            // 5. Open new tab directly accessing target Whatsapp link endpoint
            const whatsappUrl = `https://wa.me/6285124488622?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {

    const tradeInForm = document.getElementById('tradeInForm');

    if (tradeInForm) {
        tradeInForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload

            // 1. Collect inputs
            const nama = document.getElementById('tradeNama').value;
            const alamat = document.getElementById('tradeAlamat').value;
            const mobilLama = document.getElementById('mobilLama').value;
            const tahunMobil = document.getElementById('tahunMobil').value;
            const kmMobil = document.getElementById('kmMobil').value;
            const unitSuzuki = document.getElementById('unitSuzuki').value;

            const targetPhone = "6285124488622";

            // 2. Format a neatly spaced WhatsApp template
            const message = `*PENGAJUAN TRADE-IN (TUKAR TAMBAH) SUZUKI*\n` +
                            `--------------------------------------------------\n\n` +
                            `👤 *Nama Lengkap :* ${nama}\n` +
                            `📍 *Domisili/Kota :* ${alamat}\n\n` +
                            `🚗 *🚘 DETAIL MOBIL LAMA:*\n` +
                            `• *Kendaraan :* ${mobilLama}\n` +
                            `• *Tahun Rilis :* ${tahunMobil}\n` +
                            `• *Jarak Tempuh :* ${kmMobil}\n\n` +
                            `✨ *🎯 TARGET UNIT BARU:*\n` +
                            `• *Suzuki Baru :* ${unitSuzuki}\n\n` +
                            `--------------------------------------------------\n` +
                            `_Mohon jadwalkan inspeksi kendaraan dan berikan penawaran harga terbaik untuk mobil saya._`;

            // 3. Process URL Encoding and launch WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/6285124488622?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {

    const testDriveForm = document.getElementById('testDriveForm');

    if (testDriveForm) {
        testDriveForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Intercept default form submit browser behavior

            // 1. Gather form input elements data
            const nama = document.getElementById('tdNama').value;
            const unit = document.getElementById('tdUnit').value;
            const tanggal = document.getElementById('tdTanggal').value;
            const jam = document.getElementById('tdJam').value;
            const alamat = document.getElementById('tdAlamat').value;

            const targetPhone = "6285124488622";

            // 2. Format a neatly spaced WhatsApp message template string
            const message = `*BOOKING JADWAL TEST DRIVE SUZUKI*\n` +
                            `--------------------------------------------------\n\n` +
                            `👤 *Nama Lengkap :* ${nama}\n` +
                            `🚗 *Unit Suzuki :* ${unit}\n\n` +
                            `📅 *📋 DETAIL JADWAL KUNJUNGAN:*\n` +
                            `• *Tanggal Pencoba :* ${tanggal}\n` +
                            `• *Waktu / Jam :* ${jam} WIB\n\n` +
                            `📍 *🏠 ALAMAT PENJEMPUTAN LOKASI:*\n` +
                            `${alamat}\n\n` +
                            `--------------------------------------------------\n` +
                            `_Mohon konfirmasi ketersediaan unit dan jadwal test drive ini segera. Terima kasih._`;

            // 3. Encode the message parameter block safely and forward onto user API
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/6285124488622?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Automatically retrieve and print active deployment calendar year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
});