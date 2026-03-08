<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Top-left: П shape (black) -->
    <path d="M8 8 L8 48 L8 48" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M8 8 L32 8" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M32 8 L32 48" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>

    <!-- Top-right: ] shape (dark blue-grey) -->
    <path d="M58 8 L92 8" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M92 8 L92 38" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M92 38 L58 38" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>

    <!-- Bottom-right: U shape (black) -->
    <path d="M68 52 L68 92" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M68 92 L92 92" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M92 52 L92 92" stroke="black" stroke-width="7" fill="none" stroke-linecap="square"/>

    <!-- Bottom-left: [ shape (dark blue-grey) -->
    <path d="M42 62 L8 62" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M8 62 L8 92" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>
    <path d="M8 92 L42 92" stroke="#4a6178" stroke-width="7" fill="none" stroke-linecap="square"/>

    <!-- Center circle (black) -->
    <circle cx="50" cy="50" r="11" fill="black"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
}>(), {
  size: 20
})
</script>
