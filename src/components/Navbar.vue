<template>
  <v-toolbar dark prominent image="https://picsum.photos/1920/1080?random" :elevation="22">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-icon color="info" icon="$vuetify" size="x-large"></v-icon>
    </template>

    <RouterLink :class = "'text-decoration-none text-white font-weight-bold text-h5'" to="/">
        Dashboard
    </RouterLink>

    <v-spacer></v-spacer>
    <RouterLink :class="'text-decoration-none text-white font-weight-bold text-h5'" to="/lists">
      Lists
    </RouterLink>
    <RouterLink :class="'text-decoration-none text-white font-weight-bold text-h4 mx-5'" to="/carts" size ="x-large" >
      <div class = ""><v-icon>mdi-basket-fill</v-icon>Cart({{ this.$store.state.inCart.length }}) </div>
    </RouterLink>
  
  </v-toolbar>
</template>
