
export const profil = {
  nama: "Wahyu Nurgholib Razak",
  namaPanggilan: "Gholib",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 1
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};


export function saring(daftar, kategori) {
  return daftar.filter(
    (proyek) =>
      kategori === 'semua' || proyek.kategori === kategori
  );
}
