
import { saring } from './data.js';

const wadahDaftar = document.querySelector('#daftar');
const pesanKosong = document.querySelector('#pesan-kosong');
const pesanMuat = document.querySelector('#muat');
const barisFilter = document.querySelector('#filter');

function buatKartu(proyek, favorit) {
  const article = document.createElement('article');
  article.className = 'kartu';

  const h3 = document.createElement('h3');
  h3.textContent = proyek.judul;

  const pTahun = document.createElement('p');
  pTahun.textContent = `Tahun: ${proyek.tahun}`;

  const pKategori = document.createElement('p');
  pKategori.textContent = `Kategori: ${proyek.kategori}`;

  const tombolFavorit = document.createElement('button');
  tombolFavorit.className = 'favorit';
  tombolFavorit.dataset.id = proyek.id;
  tombolFavorit.textContent = favorit.includes(proyek.id) ? '★' : '☆';
  tombolFavorit.setAttribute('aria-label', 'Tandai favorit');

  article.append(h3, pTahun, pKategori, tombolFavorit);
  return article;
}

function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll('#filter button').forEach((tombol) => {
    tombol.classList.toggle(
      'aktif',
      tombol.dataset.kategori === kategoriAktif
    );
  });
}

export function render(state) {
  wadahDaftar.textContent = '';

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    pesanKosong.textContent = 'Belum ada data.';
    pesanKosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  pesanKosong.hidden = true;

  tampil.forEach((proyek) => {
    wadahDaftar.append(buatKartu(proyek, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}

export function aturMemuat(aktif) {
  pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadahDaftar.textContent = '';
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}
