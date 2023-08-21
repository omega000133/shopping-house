<script setup>
import Cart from "../components/Cart.vue";
</script>
<template>
  <v-carousel height="800" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(cart,i) in inCarts">
      <Cart
        :image="cart.image"
        :id="i"
        :title="cart.title"
        :description="cart.description"
        :price="cart.price"
        :totalprice="this.totalprice"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  computed: {
    inCarts() {
      return this.$store.state.inCart;
    },
    totalprice(){
      let totalprice = 0;

      for(let item of this.inCarts){
        totalprice += item.price;
      }
      return totalprice;
    } 
  },
};
</script>
