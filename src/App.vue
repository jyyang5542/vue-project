<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/screenshot">ScreenShot</RouterLink>
        <RouterLink to="/btool">B-Tool</RouterLink>
        <RouterLink to="/etc">Etc</RouterLink>
        <RouterLink to="/clap">Clap</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss"></style>
