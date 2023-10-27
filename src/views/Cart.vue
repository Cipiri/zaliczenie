<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button @click="router.push({ name: 'Catalog' })" class="cart-button">Back to catalog</button>
    <div v-if="!store.cart.length" style="text-align: center">
      <h1>Empty Cart ...</h1>
    </div>
    <div class="cart-items" v-else>
      <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
      >
        <div class="item-details">
          <img :src="item.thumbnail" alt="">
          <span>Brand: {{ item.brand }}</span>
          <span>Category: {{ item.category }}</span>
          <span>Price: ${{ item.price }}</span>
          <button @click="removeFromCart(item.id)" class="cart-button">Remove</button>
        </div>
      </div>
      <h2>Total Price: ${{ totalCartPrice }}</h2> <!--sumowanie ceny przedmiotów -->
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = productsStore();
const router = useRouter();

const removeFromCart = (id) => {
  store.removeFromCart(id);
}

const totalCartPrice = computed(() => {
  return store.cart.reduce((total, item) => total + item.price, 0);
});
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}

.cart-button {
  background-color: #3f51b5; 
  color: white; 
  border: none; 
  padding: 10px 20px; 
  cursor: pointer; 
  border-radius: 5px; 
  margin: 5px; 
}

.cart-button:hover {
  background-color: #303f9f; 
}
</style>
