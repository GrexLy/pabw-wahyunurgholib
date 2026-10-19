import { ambilProyek } from './api.js';
import {
  render,
  pasangFilter,
  aturMemuat,
  tampilkanGalat
} from './dom.js';

const profil = {
  nama: "Wahyu Nurgholib Razak",
  namaPanggilan: "Gholib",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 1
};

console.log(profil);

const sapaan = `${profil.nama} adalah ${profil.peran}.`;
console.log(sapaan);

const namaPanggilan = profil.namaPanggilan ?? profil.nama;
const bio = profil.detail?.bio ?? "Belum ada bio.";

console.log("Nama panggilan:", namaPanggilan);
console.log("Bio:", bio);

function untukPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}
console.log(untukPerkenalan(profil));

const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

console.log(formatKeahlian(profil.keahlian));

async function muat() {
  aturMemuat(true);

  try {
    const daftar = await ambilProyek();
    pasangFilter(daftar);
    render(daftar);
  } catch (galat) {
    tampilkanGalat(
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();