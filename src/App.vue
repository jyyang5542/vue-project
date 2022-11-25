<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/gallery">Gallery</RouterLink>
            <ul>
              <li><RouterLink to="/gallerySub">GallerySub</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink to="/screenshot">ScreenShot</RouterLink></li>
          <li><RouterLink to="/btool">B-Tool</RouterLink></li>
          <li><RouterLink to="/etc">Etc</RouterLink></li>
          <li><RouterLink to="/clap">Clap</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss"></style>
