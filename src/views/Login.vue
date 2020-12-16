<template>
  <div class="d-flex flex-wrap justify-content-center col-12 p-0 bt-login">
    <div class="d-flex flex-column align-items-center col-md-6 col-11 p-0">
      <div class="d-flex flex-wrap col-xl-8 col-12 p-5 bt-login__left">
        <h1>{{ changeFormTitle }}</h1>
        <div class="d-flex flex-column col-xl-8 col-12 p-0 pt-5">
          <label  v-if="!isLogin">Name</label>
          <input v-model="name" type="text" name="name" placeholder="Name" v-if="!isLogin"/>

          <label class="pt-3" v-if="!isLogin">Username</label>
          <input v-model="username" type="text" name="username" placeholder="Username" v-if="!isLogin"/>

          <label class="pt-3" >E-mail</label>
          <input v-model="email" type="text" name="email" placeholder="E-mail"/>

          <label class="pt-3">Password</label>
          <input v-model="password" type="password" name="password" placeholder="Password"/>

        </div>
        <div class="d-flex flex-wrap justify-content-end col-12 p-0">
          <button class="btn btn-outline-success" @click="authorizeUser">{{ changeButtonName }}</button>
        </div>
        <div class="d-flex flex-wrap justify-content-start col-12 p-0 pt-3">
          <span>{{ changeLoginBannerText }} <span class="green-text register-account" @click="isLogin = !isLogin">Create new</span></span>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center col-xl-6 col-12 p-0 bt-login__right">
      <h1 class="pt-4"><span class="green-text">Budgeter</span> application</h1>
      <div class="d-flex flex-wrap p-0">
        <img width="100%" src="~@/assets/images/loginRight.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Login",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      username: "",
      name: "",
    };
  },
  computed: {
    changeButtonName() {
      return this.isLogin ? "Login" : "Register";
    },
    changeLoginBannerText() {
      return this.isLogin ? "Still don't have Budgeter account?" : "Already have Budgeter account?"
    },
    changeFormTitle() {
      return this.isLogin ? "Login in your free account" : "Create new Budgeter account"
    }
  },
  methods: {
    authorizeUser() {
      if(!this.isLogin) {
        this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          username: this.username,
          name: this.name
        }).then(() => { this.$router.push({name: 'dashboard'})})
            .catch(err => {
              this.error = err.response.data.error
              this.$store.commit("Set_loading");
            })
      }else {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then(() => { this.$router.push({name: 'dashboard'})})
            .catch(err => {
              alert("ERROR! Your email or password is not correct." + err);
              this.$store.commit("Set_loading");
            })
      }
    }
  }
}
</script>

<style scoped>

</style>
