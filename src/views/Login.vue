<template>
  <div class="d-flex flex-wrap justify-content-center col-12 p-0 bt-login">
    <div class="col-12 p-3 alert alert-danger alert-dismissible fade show" role="alert" v-if="errorMessage">
      <strong>Error!</strong> New transaction was not added to the database
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="d-flex flex-column align-items-center col-md-6 col-11 p-0">
      <ValidationObserver ref="loginForm" class="d-flex flex-wrap col-xl-8 col-12 p-5 bt-login__left">
        <h1>{{ changeFormTitle }}</h1>
        <div class="d-flex flex-column col-xl-8 col-12 p-0 pt-5">
          <ValidationProvider
              tag="div"
              name="Name"
              rules="required|min:3|max:30"
              v-slot="{ errors }"
              v-if="!isLogin"
              class="d-flex flex-column"
          >
            <label>Name</label>
            <input v-model="name" type="text" name="name" placeholder="Name"/>
            <span class="text-danger pt-0">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
              tag="div"
              name="Username"
              rules="required|min:3|max:30"
              v-slot="{ errors }"
              v-if="!isLogin"
              class="d-flex flex-column"
          >
            <label class="pt-3">Username</label>
            <input v-model="username" type="text" name="username" placeholder="Username"/>
            <span class="text-danger pt-0">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
              tag="div"
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
              class="d-flex flex-column"
          >
            <label class="pt-3" >E-mail</label>
            <input v-model="email" type="text" name="email" placeholder="E-mail"/>
            <span class="text-danger pt-0">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
              tag="div"
              name="Password"
              rules="required|min:6"
              v-slot="{ errors }"
              class="d-flex flex-column"
          >
            <label class="pt-3">Password</label>
            <input v-model="password" type="password" name="password" placeholder="Password"/>
            <span class="text-danger pt-0">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="d-flex flex-wrap justify-content-end col-12 p-0">
          <button class="btn btn-outline-success" @click="authorizeUser">{{ changeButtonName }}</button>
        </div>
        <div class="d-flex flex-wrap justify-content-start col-12 p-0 pt-3">
          <span>{{ changeLoginBannerText }} <span class="green-text register-account" @click="isLogin = !isLogin">{{ changeFormTitleLink }} </span></span>
        </div>
      </ValidationObserver>
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
      errorMessage: false
    };
  },
  computed: {
    changeButtonName() {
      return this.isLogin ? "Login" : "Register";
    },
    changeLoginBannerText() {
      return this.isLogin ? "Still don't have Budgeter account?" : "Already have Budgeter account?";
    },
    changeFormTitle() {
      return this.isLogin ? "Login in your free account" : "Create new account";
    },
    changeFormTitleLink() {
      return this.isLogin ? "Create new account" : "Login";
    }
  },
  methods: {
    authorizeUser() {
      this.$refs.loginForm.validate().then(async success => {
        if(success) {
          try {
            if(!this.isLogin) {
              this.$store.dispatch('register', {
                email: this.email,
                password: this.password,
                username: this.username,
                name: this.name
              }).then(() => { this.$router.push({name: 'dashboard'}).catch(()=>{})})
                  .catch(() => {
                    this.$store.commit("Set_loading");
                  })
            }else {
              this.$store.dispatch('login', {
                email: this.email,
                password: this.password
              }).then(() => { this.$router.push({name: 'dashboard'}).catch(()=>{
                this.errorMessage = true;
              })})
                  .catch(() => {
                    this.$store.commit("Set_loading");
                    this.errorMessage = true;
                  })
            }
          }catch (e) {
            this.errorMessage = true;
          }
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
