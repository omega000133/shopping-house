<script setup>
import "@mdi/font/css/materialdesignicons.css";
import { mapMutations } from "vuex";
</script>
<template>
  <v-sheet
    height="100%"
    style="position: relative"
    class="d-flex justify-center align-end text-center mx-auto"
  >
    <div style="position: absolute" class="mb-15 w-50 bg-white">
      <v-card class="mx-auto" width="100%" variant="outlined">
        <v-card-item>
          <div>
            <div class="text-h4 mb-1">{{ title }}</div>
            <div class="text-h4 mb-1">{{ price }}$</div>
            <div class="text-h5">
              {{ description }}
            </div>
          </div>
        </v-card-item>
        <v-card-actions class="text-center mx-auto">
          <v-btn
            variant="outlined"
            class="text-center mx-auto"
            @click="DELETETOCART(this.id)"
          >
            Buy
          </v-btn>
          <v-dialog v-model="dialog1" persistent width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="outlined"
                class="text-center mx-auto"
                v-bind="props"
                >Cancel</v-btn
              >
            </template>
            <v-card>
              <v-card-title class="text-h5">
                {{ description }}
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="(dialog1 = false), DELETETOCART(this.id)"
                >
                  Disagree
                </v-btn>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="dialog1 = false"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </div>
    <div style="position: absolute" class="mb-10 text-h5 bg-white">
      All: {{ totalprice }}$
      <v-btn
        variant="outlined"
        class="text-center mx-auto"
        @click="DELETETOCART(this.id)"
      >
        Buy
      </v-btn>
      <v-dialog v-model="dialog2" persistent width="auto">
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" class="text-center mx-auto" v-bind="props">
            Cancel
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            {{ description }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="(dialog2 = false), DELETEALL(0)"
            >
              Disagree
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog2 = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <img :src="image" class="h-100 pt-5" />
  </v-sheet>
</template>

<script>
export default {
  props: ["id", "description", "image", "price", "title", "totalprice"],
  icons: {
    defaultSet: "mdi",
  },
  data: () => ({
    dialog1: false,
    dialog2: false,
  }),
  computed: {
    inCart() {
      return this.$store.state.inCart;
    },
  },
  methods: { ...mapMutations(["DELETETOCART", "DELETEALL"]) },
};
</script>
