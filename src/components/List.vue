<script setup>
import "@mdi/font/css/materialdesignicons.css";
import { mapMutations } from "vuex";
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :class="`elevation-${isHovering ? 24 : 6}`"
      class="rounded-xl mx-auto pt-5"
      height="350"
      width="300"
    >
      <v-img class="align-end text-white mx-auto" width="280" height="180" :src="image">
        <v-card-title class="font-weight-black text-yellow-accent-4 text-h5">{{
          category
        }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-2 text-h5 d-flex justify-space-between">
        <div>{{ price }}$</div>
        <div>
          <v-icon icon="mdi-thumb-up" color="yellow-accent-4"></v-icon
          >{{ follow }}
        </div>
        <!-- <div>
          <v-icon icon="mdi-thumb-down"></v-icon
          >{{downfollow[0] }}
        </div> -->
      </v-card-subtitle>

      <v-card-text class="d-flex justify-space-between">
        <div>Rating: {{ rating.rate }}</div>
        <div>Count: {{ rating.count }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="dialog = true"
          prepend-icon="mdi-dialpad"
          size="x-large"
          color="purple-darken-2"
        >
        </v-btn>
        <v-dialog v-model="dialog" class="rounded-xl mx-auto">
          <v-card class="mx-auto" width="700">
            <v-img
              :src="image"
              class="mx-auto align-end"
              width="400"
              height="500"
              cover
            >
              <v-card-title
                class="font-weight-black text-yellow-accent-4 text-h4"
              >
                <div>{{ category }}</div>
              </v-card-title>
            </v-img>

            <v-card-text class="font-weight-bold text-h5">
              {{ title }}
            </v-card-text>

            <v-card-title class="d-flex justify-space-between">
              <div class="text-red-darken-1 font-weight-black">
                Price : {{ price }}$
              </div>
              <div class="text-amber-accent-3 font-weight-black">
                Rating : {{ rating.rate }}
              </div>
              <div class="text-light-blue-accent-4 font-weight-black">
                Count : {{ rating.count }}
              </div>
            </v-card-title>
            <v-card-text>
              {{ description }}
            </v-card-text>
            <div class="mx-auto">
              <v-btn
                class="ma-2 font-weight-bold"
                color="orange-darken-2"
                prepend-icon="mdi-arrow-left"
                @click="dialog = false"
                >Go to Back</v-btn
              >
              <v-btn
                class="ma-2 text-white font-weight-bold"
                color="light-green-accent-4"
                prepend-icon="mdi-basket-plus"
                @click="ADDTOCART(item),dialog=false"
                >Add to Cart</v-btn
              >
              <v-btn
                class="ma-2 text-white font-weight-bold"
                color="blue-lighten-2"
                prepend-icon="mdi-thumb-up"
                @click.once="FOLLOW(this.id),dialog=false"
                >Add Referral</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
        <v-btn
          prepend-icon="mdi-basket-plus"
          size="x-large"
          @click="ADDTOCART(item)"
          color="light-green-accent-4"
        >
        </v-btn>
        <v-btn
          prepend-icon="mdi-thumb-up"
          size="x-large"
          color="blue-lighten-2"
          @click.once="FOLLOW(this.id)"
        >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: [
    "id",
    "category",
    "image",
    "rating",
    "price",
    "title",
    "description",
    "item",
  ],
  icons: {
    defaultSet: "mdi",
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    follow() {
      return this.$store.state.follow[this.id];
    },
  },
  mounted() {
  },
  methods: { ...mapMutations(["FOLLOW", "ADDTOCART"]) },
};
</script>
