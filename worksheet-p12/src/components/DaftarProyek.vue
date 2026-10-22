<script setup>
// Logika pengambilan data JSON dan perulangan kartu akan dihubungkan di Lembar E
</script>

<template>
  <section id="whats-happen">
    <h2>What's Happen?</h2>

    <!-- Wadah tombol filter bisa dipasang berdampingan atau di atasnya -->
    <slot></slot>

    <p id="pesan-kosong" hidden>Tidak ada catatan pada kategori ini</p>
    <p id="muat" hidden>Memuat data...</p>

    <div class="katalog" id="daftar">
      <!-- Kartu katalog akan dirender secara dinamis di Lembar E -->
    </div>
  </section>
</template>