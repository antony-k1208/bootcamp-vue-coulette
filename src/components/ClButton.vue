<template>
  <button class="btn">{{ title }}</button>
</template>

<script>
export default {
  name: "ClButton",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.btn {
  all: unset;
  padding: 10px;
  max-heigt: 80px;
  max-width: 150px;
  border: 1px solid blue;
}
</style>
