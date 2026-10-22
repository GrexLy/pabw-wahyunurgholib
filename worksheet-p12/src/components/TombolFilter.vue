<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <div>
      <button
        :class="{ aktif: state.kategoriAktif === 'semua' }"
        @click="pilihKategori('semua')"
      >
        Semua
      </button>
      <button
        :class="{ aktif: state.kategoriAktif === 'trekking' }"
        @click="pilihKategori('trekking')"
      >
        Trekking
      </button>
      <button
        :class="{ aktif: state.kategoriAktif === 'camping' }"
        @click="pilihKategori('camping')"
      >
        Camping
      </button>
      <button id="atur-ulang" @click="aturUlang">
        Atur ulang
      </button>
    </div>
  </div>
</template>