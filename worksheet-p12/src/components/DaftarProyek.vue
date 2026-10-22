<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})
</script>

<template>
  <section id="whats-happen">
    <h2>What's Happen?</h2>

    <!-- Slot untuk TombolFilter -->
    <slot></slot>

    <!-- Penanganan empat keadaan P10 -->
    <p id="muat" v-if="state.memuat">Memuat data...</p>
    <p id="pesan-kosong" v-else-if="state.galat">{{ state.galat }}</p>
    <p id="pesan-kosong" v-else-if="tampil.length === 0">Belum ada data.</p>

    <!-- Wadah kartu katalog -->
    <div class="katalog" id="daftar" v-else>
      <article class="kartu" v-for="proyek in tampil" :key="proyek.id">
        <h3>{{ proyek.judul }}</h3>
        <p>Tahun: {{ proyek.tahun }}</p>
        <p>Kategori: {{ proyek.kategori }}</p>
        <button
          class="favorit"
          :data-id="proyek.id"
          aria-label="Tandai favorit"
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </article>
    </div>
  </section>
</template>