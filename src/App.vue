<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="hatiho">
    <header class="hatiho__header">
      <div class="wrapper">
        <h1 class="hatiho__logo"><RouterLink to="/">HatiHo</RouterLink></h1>
        <nav class="hatiho__gnb">
          <ul class="hatiho__menu">
            <!-- Gallery -->
            <li>
              <RouterLink to="/gallery">Gallery</RouterLink>
              <ul class="hatiho__submenu">
                <li><RouterLink to="/gallery">Original</RouterLink></li>
                <li><RouterLink to="/gallery">Games</RouterLink></li>
              </ul>
            </li>
            <!-- Screenshot -->
            <li>
              <RouterLink to="/screenshot">ScreenShot</RouterLink>
              <ul class="hatiho__submenu">
                <li><RouterLink to="/screenshot">FFXIV</RouterLink></li>
              </ul>
            </li>
            <!-- B-Tool -->
            <li>
              <RouterLink to="/btool">B-Tool</RouterLink>
              <ul class="hatiho__submenu">
                <li><RouterLink to="/btool">Original</RouterLink></li>
                <li><RouterLink to="/btool">Games</RouterLink></li>
                <li><RouterLink to="/btool">Transformers</RouterLink></li>
                <li><RouterLink to="/btool">Etc</RouterLink></li>
              </ul>
            </li>
            <!-- Etc -->
            <li>
              <RouterLink to="/etc">Etc</RouterLink>
              <ul class="hatiho__submenu">
                <li><RouterLink to="/etc">Links</RouterLink></li>
              </ul>
            </li>
            <!-- Clap -->
            <li><RouterLink to="/clap">Clap</RouterLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="hatiho__content">
      <RouterView />
    </section>

    <footer class="hatiho__footer">Copyright 2017 ~ 2022 <b>ⓒHatiho</b> All Rights Reserved.</footer>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/_var.scss";
@import "./assets/scss/pc.scss";
@import "./assets/scss/tablet.scss";
@import "./assets/scss/mobile.scss";
</style>
