<script setup>
// Pada Lembar C kode komponen belum dipecah, fokus memverifikasi tata letak dan aset
</script>

<template>
  <div class="page">
    <header>
      <div class="header-baris">
        <h1>Hike to Bukit Klangon</h1>

        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#direction">Direction</a></li>
            <li><a href="#whats-happen">What's Happen?</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ul>

          <div class="tema">
            <input type="checkbox" id="tema" class="pengalih-tema" />
            <label for="tema" class="tombol-tema">Tema gelap</label>
          </div>
        </nav>
      </div>
    </header>

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

        <section id="whats-happen">
          <h2>What's Happen?</h2>

          <div id="filter">
            <div>
              <button data-kategori="semua" class="aktif">Semua</button>
              <button data-kategori="trekking">Trekking</button>
              <button data-kategori="camping">Camping</button>
              <button id="atur-ulang">Atur ulang</button>
            </div>
          </div>

          <p id="pesan-kosong" hidden>Tidak ada catatan pada kategori ini</p>
          <p id="muat" hidden>Memuat data...</p>

          <div class="katalog" id="daftar">
            <!-- Daftar dinamis akan dirender lewat Vue pada Lembar D -->
          </div>
        </section>
      </div>

      <section id="conclusion">
        <h2>Conclusion</h2>

        <p>Mungkin perjalanan kali ini tidak sesuai rencana,</p>
        <p>Tapi justru dari situlah, Semuanya menjadi lebih berharga.</p>
      </section>

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
    </main>

    <footer>
      <p>WAHYU NURGHOLIB RAZAK · 25523057 · 2026</p>
    </footer>
  </div>
</template>

<style>
/* Kosong: seluruh berkas CSS sudah diimpor secara global di main.js */
</style>