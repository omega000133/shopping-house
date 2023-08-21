<script setup>
import List from "../components/List.vue";
</script>
<template>
  <v-card class="mx-auto pb-8">
    <v-container fluid max-width="1300">
      <v-row justify="center">
        <v-col v-for="list in lists" :key="list" cols="auto">
          <List
            :category="list.category"
            :image="list.image"
            :rating="list.rating"
            :price="list.price"
            :title = "list.title"
            :description="list.description"
            :id ="list.id"
            :item="list"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.lists = response.data;
      console.log(response)
    });
  },
};
</script>
