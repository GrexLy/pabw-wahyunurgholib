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

console.log("Nama:", profil.nama);
console.log("Peran:", profil.peran);
console.log("Keahlian:", profil.keahlian);
console.log("Jumlah proyek:", profil.jumlahProyek);