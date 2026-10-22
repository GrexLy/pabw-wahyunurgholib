<script setup>
import { reactive, onMounted, watch } from 'vue'
import { profil, buatPerkenalan, formatKeahlian } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const dataProfil = reactive(profil)

onMounted(async () => {
  pulihkan(muat()) // pilihan terakhir dari localStorage
  try {
    isiProyek(await ambilProyek()) // panggil api.js
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="dataProfil" />

    <main>
      <section id="direction">
        <h2>Direction</h2>
        <p>
          Bukit Klangon merupakan salah satu destinasi wisata alam di lereng
          Gunung Merapi, Sleman, Yogyakarta.
        </p>
        <p>
          Tempat ini menawarkan suasana sejuk dengan jalur trekking yang
          dikelilingi hutan pinus serta pemandangan Gunung Merapi dari
          ketinggian.
        </p>
        <p>
          Dengan jalur yang relatif singkat, Bukit Klangon cocok untuk
          menikmati perjalanan santai sekaligus merasakan pengalaman trekking
          di alam terbuka.
        </p>
      </section>

      <div class="isi">
        <section id="galeri">
          <h2>Dokumentasi Perjalanan</h2>
          <div class="galeri-grid">
            <figure>
              <img
                src="/IMG_2021.jpg"
                alt="Pemandangan Gunung Merapi dari puncak Bukit Klangon"
                width="300"
                height="340"
                loading="lazy"
              />
              <figcaption>Puncak Klangon at 10.45 A.M</figcaption>
            </figure>
          </div>
        </section>

        <DaftarProyek>
          <TombolFilter />
        </DaftarProyek>
      </div>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>Mungkin perjalanan kali ini tidak sesuai rencana,</p>
        <p>Tapi justru dari situlah, Semuanya menjadi lebih berharga.</p>
      </section>

      <FormKontak />
    </main>

    <footer>
      <p>{{ buatPerkenalan(dataProfil) }} · {{ formatKeahlian(dataProfil.keahlian) }}</p>
    </footer>
  </div>
</template>

<style>
/* CSS diimpor di main.js */
</style>