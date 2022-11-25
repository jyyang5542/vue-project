<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <!-- Gallery -->
          <li>
            <RouterLink to="/gallery">Gallery</RouterLink>
            <ul>
              <li><RouterLink to="/gallery">Original</RouterLink></li>
              <li><RouterLink to="/gallery">Games</RouterLink></li>
            </ul>
          </li>
          <!-- Screenshot -->
          <li>
            <RouterLink to="/screenshot">ScreenShot</RouterLink>
            <ul>
              <li><RouterLink to="/screenshot">FFXIV</RouterLink></li>
            </ul>
          </li>
          <!-- B-Tool -->
          <li>
            <RouterLink to="/btool">B-Tool</RouterLink>
            <ul>
              <li><RouterLink to="/btool">Original</RouterLink></li>
              <li><RouterLink to="/btool">Games</RouterLink></li>
              <li><RouterLink to="/btool">Transformers</RouterLink></li>
              <li><RouterLink to="/btool">Etc</RouterLink></li>
            </ul>
          </li>
          <!-- Etc -->
          <li>
            <RouterLink to="/etc">Etc</RouterLink>
            <ul>
              <li><RouterLink to="/etc">Links</RouterLink></li>
            </ul>
          </li>
          <!-- Clap -->
          <li><RouterLink to="/clap">Clap</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss"></style>
