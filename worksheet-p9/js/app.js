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

// Data utama yang di-export sebagai ES Module ke js/dom.js
export const daftarProyek = [
  {
    judul: "Hike to Bukit Klangon",
    tahun: 2026,
    selesai: true,
    kategori: "trekking"
  },
  {
    judul: "Eksplorasi Hutan Pinus",
    tahun: 2026,
    selesai: true,
    kategori: "trekking"
  },
  {
    judul: "Camp Area Merapi View",
    tahun: 2026,
    selesai: false,
    kategori: "camping"
  }
];

console.table(daftarProyek);

// Pengolahan array methods dari P08
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.table(judulProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(proyekSelesai);

const proyekMPTI = daftarProyek.find(
  (proyek) => proyek.judul === "MPTI - EXPO"
);
console.log(proyekMPTI);

const proyekSalinan = [...daftarProyek];
proyekSalinan.sort((a, b) => a.tahun - b.tahun);
console.table(proyekSalinan);