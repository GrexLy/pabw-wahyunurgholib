
import {
  pilihKategori,
  tambahFavorit,
  aturUlang
} from './state.js';

export function pasangPendengar() {
  // Event klik tombol filter kategori
  const barisFilter = document.querySelector('#filter');

  barisFilter.addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;

    // Pastikan yang diklik adalah tombol kategori
    if (!tombol.dataset.kategori) return;

    pilihKategori(tombol.dataset.kategori);
  });

  // Event klik tombol Atur Ulang
  const tombolAturUlang = document.querySelector('#atur-ulang');

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener('click', () => {
      aturUlang();
    });
  }

  // Event klik tombol favorit
  const wadahDaftar = document.querySelector('#daftar');

  wadahDaftar.addEventListener('click', (event) => {
    const tombol = event.target.closest('.favorit');
    if (!tombol) return;

    tambahFavorit(Number(tombol.dataset.id));
  });

  // Event validasi form
  const formPerjalanan = document.querySelector(
    '#form-perjalanan form'
  );

  formPerjalanan.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputNama = document.querySelector('#nama');
    const inputTanggal = document.querySelector('#tanggal');
    const inputRating = document.querySelector('#rating');

    let sah = true;

    if (inputNama.value.trim() === '') {
      inputNama.setAttribute('aria-invalid', 'true');
      sah = false;
    } else {
      inputNama.removeAttribute('aria-invalid');
    }

    if (inputTanggal.value.trim() === '') {
      inputTanggal.setAttribute('aria-invalid', 'true');
      sah = false;
    } else {
      inputTanggal.removeAttribute('aria-invalid');
    }

    const nilaiRating = Number(inputRating.value);

    if (!nilaiRating || nilaiRating < 1 || nilaiRating > 5) {
      inputRating.setAttribute('aria-invalid', 'true');
      sah = false;
    } else {
      inputRating.removeAttribute('aria-invalid');
    }

    if (sah) {
      alert('Penilaian berhasil disimpan!');
      formPerjalanan.reset();
    } else {
      const kolomGagal = formPerjalanan.querySelector(
        '[aria-invalid="true"]'
      );

      if (kolomGagal) kolomGagal.focus();
    }
  });
}
