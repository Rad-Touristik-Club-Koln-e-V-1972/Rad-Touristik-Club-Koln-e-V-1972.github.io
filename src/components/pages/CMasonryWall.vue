<template>
  <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
          & https://drafts.csswg.org/css-grid-3/
          & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
  <div class="column masonry-wall-container">
    <div class="masonry-wall-flex-break hidden" />
    <div class="masonry-wall-flex-break" />
    <div class="masonry-wall-flex-break" />
    <div class="masonry-wall-flex-break" />
    <div class="masonry-wall-flex-break" />
    <div class="masonry-wall-flex-break" />
    <div v-for="it in props.items" :key="it.id" class="masonry-wall-cell">
      <slot :item="it" />
    </div>
  </div>
</template>

<script generic="T extends AEntity" lang="ts" setup>
import type AEntity from 'src/models/entities/AEntity'

const props = defineProps<{ items: T[] }>()
</script>

<style lang="scss" scoped>
$breakpoints: (
  map-get($sizes, 'xs'): 1,
  map-get($sizes, 'sm'): 2,
  map-get($sizes, 'md'): 3,
  map-get($sizes, 'lg'): 4,
  map-get($sizes, 'xl'): 6,
);

@each $breakpoint, $x in $breakpoints {
  @media (min-width: $breakpoint) {
    @for $i from 1 through ($x - 1) {
      .masonry-wall-container > div:nth-child(#{$x}n + #{$i}) {
        order: #{$i};
      }
    }
    .masonry-wall-container {
      height: calc(2800px / #{$x});
      .masonry-wall-cell {
        padding: 1px;
        width: calc(100% / #{$x});
      }
      > div:nth-child(#{$x}n) {
        order: #{$x};
      }
    }
  }
}

.masonry-wall-flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}
</style>
