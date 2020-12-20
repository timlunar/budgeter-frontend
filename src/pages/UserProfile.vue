<template>
    <div class="row">
      <div class="col-xl-4 col-md-12">
        <user-card>

        </user-card>
      </div>
      <div class="col-xl-8 col-md-12">
        <edit-profile-form>

        </edit-profile-form>
      </div>
    </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
export default {
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
<style>
</style>
