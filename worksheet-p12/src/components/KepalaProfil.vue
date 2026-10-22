<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
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
</template>