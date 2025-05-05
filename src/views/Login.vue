<template>
  <div class="min-h-screen flex justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md my-auto">
      <h2 class="text-2xl font-bold mb-6 text-center">
        {{ isLogin ? 'Login to Your Account' : 'Create an Account' }}
      </h2>

      <form @submit.prevent="handleSubmit">
        <div v-if="!isLogin" class="mb-4">
          <label class="block text-gray-700 mb-2" for="name">Name</label>
          <input type="text" id="name" v-model="form.name" class="w-full px-4 py-2 border rounded-lg" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input type="email" id="email" v-model="form.email" class="w-full px-4 py-2 border rounded-lg" required />
        </div>

        <div class="mb-4 flex items-center space-x-2">
          <input type="text" id="otp" v-model="form.otp" class="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter OTP" required />
          <button type="button" class="bg-gray-200 text-sm px-3 py-2 rounded hover:bg-gray-300" @click="sendOtp">
            Send OTP
          </button>
        </div>

        <button type="submit"
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-600 transition font-semibold">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </button>
      </form>

      <div class="text-center mt-6">
        <p>
          {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
          <button @click="toggleForm" class="text-blue-600 hover:underline font-semibold ml-1">
            {{ isLogin ? 'Sign Up' : 'Login' }}
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      isLogin: true,
      form: {
        name: '',
        email: '',
        otp: '',
      },
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.form = { name: '', email: '', otp: '' };
    },
    handleSubmit() {
      if (!this.form.otp) {
        alert('Please enter OTP');
        return;
      }

      if (this.isLogin) {
        console.log('Logging in with:', this.form.email, this.form.otp);
      } else {
        console.log('Signing up with:', this.form.name, this.form.email, this.form.otp);
      }
    },
    sendOtp() {
      if (!this.form.email) {
        alert('Please enter an email first');
        return;
      }
      console.log('Sending OTP to:', this.form.email);
    },
  },
};
</script>