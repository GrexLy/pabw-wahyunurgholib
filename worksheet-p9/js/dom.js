import { daftarProyek } from "./app.js";

// --- LEMBAR A: Pemilihan Elemen (querySelector) ---
const wadahDaftar = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const formPerjalanan = document.querySelector("#form-perjalanan form");

// --- LEMBAR B: Pabrik Pembuat Kartu ---
function buatKartu(proyek) {
  const article = document.createElement("article");
  article.className = "kartu";

  const h3 = document.createElement("h3");
  h3.textContent = proyek.judul;

  const pTahun = document.createElement("p");
  pTahun.textContent = `Tahun: ${proyek.tahun}`;

  const pStatus = document.createElement("p");
  pStatus.textContent = `Status: ${proyek.selesai ? "Selesai" : "Belum Selesai"}`;

  article.append(h3, pTahun, pStatus);
  return article;
}

// --- LEMBAR D: Pola render(daftar) ---
export function render(daftar) {
  wadahDaftar.textContent = ""; // Membersihkan wadah agar kartu tidak menumpuk

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((proyek) => wadahDaftar.append(buatKartu(proyek)));
}

// Render data pertama kali saat halaman dimuat
render(daftarProyek);

// --- LEMBAR C: Event Delegation (Filter Kategori) ---
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Mengabaikan klik yang berada di luar tombol

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

// --- LEMBAR D: Validasi Form ---
formPerjalanan.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah muat ulang halaman

  const inputNama = document.querySelector("#nama");
  const inputTanggal = document.querySelector("#tanggal");
  const inputRating = document.querySelector("#rating");

  let sah = true;

  if (inputNama.value.trim() === "") {
    inputNama.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    inputNama.removeAttribute("aria-invalid");
  }

  if (inputTanggal.value.trim() === "") {
    inputTanggal.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    inputTanggal.removeAttribute("aria-invalid");
  }

  const nilaiRating = Number(inputRating.value);
  if (!nilaiRating || nilaiRating < 1 || nilaiRating > 5) {
    inputRating.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    inputRating.removeAttribute("aria-invalid");
  }

  if (sah) {
    alert("Penilaian berhasil disimpan!");
    formPerjalanan.reset();
  } else {
    const kolomGagal = formPerjalanan.querySelector('[aria-invalid="true"]');
    if (kolomGagal) kolomGagal.focus();
  }
});