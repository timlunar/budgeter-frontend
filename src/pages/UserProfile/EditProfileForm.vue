<template>
  <card class="card" title="User Details">
    <div>
      <form @submit.prevent>
        <div class="row">

          <div class="col-md-6">
            <fg-input type="text"
                      label="Username"
                      placeholder="Username"
                      v-model="user.username"
                      disabled>
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="email"
                      label="User Email"
                      placeholder="Email"
                      v-model="user.email"
                      disabled>
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.firstName"
                      disabled>
            </fg-input>
          </div>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: this.$store.state.user.user.username,
        email: this.$store.state.user.user.email,
        firstName: this.$store.state.user.user.name,
        lastName: this.$store.state.user.user.lastName
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
