<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit="login">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Tutaj dodaj logikę logowania, np. wywołując API lub sprawdzając dane logowania
      // Jeśli logowanie powiedzie się, przekieruj użytkownika na inną stronę
      this.$router.push({ name: 'Catalog' });
    }
  }
};
</script>