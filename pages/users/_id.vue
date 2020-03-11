<template>
  <div>
    <p>
      <!-- /users/_id.vue -->
      User ID: {{userID}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userID: this.$route.params.id
    }
  }
}
</script>