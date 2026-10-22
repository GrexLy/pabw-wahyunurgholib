<script setup>
// Penanganan formulir
</script>

<template>
  <section id="form-perjalanan">
    <h2>Rating Perjalanan Kali ini :</h2>

    <form action="/simpan" method="post">
      <div class="form-kolom">
        <label for="nama">Nama</label>
        <input type="text" id="nama" name="nama" required />
        <small class="pesan-galat">Nama wajib diisi.</small>
      </div>

      <div class="form-kolom">
        <label for="tanggal">Tanggal perjalanan</label>
        <input type="date" id="tanggal" name="tanggal" required />
        <small class="pesan-galat">Tanggal perjalanan wajib diisi.</small>
      </div>

      <div class="form-kolom">
        <label for="rating">Rating perjalanan (1–5)</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          required
        />
        <small class="pesan-galat">Rating harus diisi dengan angka 1 sampai 5.</small>
      </div>

      <button type="submit">Simpan</button>
    </form>
  </section>
</template>