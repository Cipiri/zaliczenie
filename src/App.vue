<template>
  <header>
    <v-toolbar>
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <div @click="goToCatalog">
          <img src="@/assets/resize-16983478101138841060resize1698347706370238391logo.png" alt="Logo" style="cursor: pointer;" />
        </div>
        <div v-if="!userLoggedIn">
          <!-- Przycisk "Login" wyświetlany, jeśli użytkownik nie jest zalogowany -->
          <v-btn
            @click="router.push({ name: 'Login' })"
            color="primary"
            variant="elevated"
          >
            Login
          </v-btn>
        </div>
        <div>
          <!-- Przycisk "Items in Cart" z liczbą elementów w koszyku -->
          <v-btn
            @click="router.push({ name: 'CartView' })"
            color="primary"
            variant="elevated"
          >
            Items in Cart: {{ store.cart.length }}
          </v-btn>
          <!-- Przycisk "Login" wyświetlany, jeśli użytkownik jest zalogowany -->
          <v-btn
            v-if="userLoggedIn"
            @click="router.push({ name: 'Login' })"
            color="primary"
            variant="elevated"
          >
            Login
          </v-btn>
        </div>
      </div>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import { productsStore } from "@/stores/products";

const router = useRouter();
const store = productsStore();
const userLoggedIn = true; // Zastąp tę zmienną wartością reprezentującą stan zalogowania użytkownika

const goToCatalog = () => {
  router.push({ name: 'Catalog' });
}
</script>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
