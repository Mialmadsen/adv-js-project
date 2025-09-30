<template>
    <div class="login-view">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit" :disabled="loading">Login</button>
    </form>
    <form @submit.prevent="registerUser">
        <h1>Register</h1>
        <input type="email" v-model="regEmail" placeholder="Email" required />
        <input type="password" v-model="regPassword" placeholder="Password" required />
        <button type="submit" :disabled="loading">Register</button>
    </form>
    <div class="error" v-if="authError">
        {{ authError }}
    </div>
    <div v-if="isLoggedIn"> 
        Logged in as: {{ currentUser?.email }}
    </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import {useAuth} from '../modules/useAuth'

const { login,register, authError, loading, isLoggedIn, currentUser } = useAuth()

const email = ref('')
const password = ref('')
const regEmail = ref('')
const regPassword = ref('')

const loginUser = () => {
    login(email.value, password.value)
}

const registerUser = () => {
    register(regEmail.value, regPassword.value)
}



</script>

<style>

.login-view {
    max-width: 400px;
    margin: 20px auto;
}

.error {
    color: red;
    margin-top: 16px;
}

</style>