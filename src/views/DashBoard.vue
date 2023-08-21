<template>
  <div>
    <v-card class="my-4">
      <div
        :class="'text-h2 font-weight-bold pa-2 text-center text-green-darken-1'"
      >
        Welcome to this Site
      </div>
    </v-card>
  </div>
  <v-carousel>
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
