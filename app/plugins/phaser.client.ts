import { defineNuxtPlugin } from "#app";
import Phaser from "phaser";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("Phaser", Phaser);
});
