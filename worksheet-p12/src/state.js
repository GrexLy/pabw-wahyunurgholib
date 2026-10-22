import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  memuat: true,
  galat: ''
})

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  const index = state.favorit.indexOf(id)
  if (index === -1) {
    state.favorit.push(id)
  } else {
    state.favorit.splice(index, 1)
  }
}

export function simpan(stateObj) {
  try {
    const isi = {
      versi: VERSI,
      kategoriAktif: stateObj.kategoriAktif,
      favorit: stateObj.favorit
    }
    localStorage.setItem(KUNCI, JSON.stringify(isi))
  } catch (e) {
    console.error('Gagal menyimpan ke localStorage:', e)
  }
}

export function muat() {
  try {
    const raw = localStorage.getItem(KUNCI)
    if (!raw) return null

    const isi = JSON.parse(raw)
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }

    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return
  if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif
  if (Array.isArray(isi.favorit)) state.favorit = isi.favorit
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
}