
import { ambilProyek } from './api.js';
import {
  aturMemuat,
  tampilkanGalat
} from './dom.js';
import {
  isiProyek,
  muat,
  pulihkan
} from './state.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pasangPendengar();

  // Memulihkan kategori dan favorit yang tersimpan
  pulihkan(muat());

  aturMemuat(true);

  try {
    const daftar = await ambilProyek();
    isiProyek(daftar);
  } catch (galat) {
    tampilkanGalat(
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();
