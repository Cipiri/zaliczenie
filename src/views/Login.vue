<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="fill-height" fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-card-title class="headline">
            Login
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                dense
                :style="{ width: '300px' }"  
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                type="password"
                dense
                :style="{ width: '300px' }"  
              ></v-text-field>
              <v-btn color="primary" type="submit" block>Login</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* odstępy pól tekstowych */
.v-text-field {
  margin: 0;
}

/* Zwiększ odstęp między elementami formularza */
form > * {
  margin-bottom: 20px;
}
</style>


