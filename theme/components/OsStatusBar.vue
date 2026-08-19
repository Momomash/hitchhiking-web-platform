<!--
  OsStatusBar — статус-бар окна. Забирает на себя роль прежних header/footer:
  номер секции, «документ» (конференция), unit и счётчик страниц.
-->
<script setup lang="ts">
defineProps<{
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
}>()
</script>

<template>
  <div class="os-statusbar">
    <span v-if="sectionNumber" class="os-statusbar__cell os-statusbar__section">
      {{ sectionNumber }}
    </span>
    <span class="os-statusbar__cell">{{ status ?? 'STATUS: RUNNING' }}</span>
    <span class="os-statusbar__spacer" />
    <span v-if="docNumber" class="os-statusbar__cell">
      {{ docNumber }}<template v-if="unit"> · {{ unit }}</template>
    </span>
    <span class="os-statusbar__cell">
      {{ $nav?.currentPage ?? '' }}<template v-if="$nav?.total"> / {{ $nav.total }}</template>
    </span>
  </div>
</template>
