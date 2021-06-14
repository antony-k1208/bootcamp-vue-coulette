<template>
  <main>
    <ClCard
      v-for="(color, index) in colors"
      :key="color"
      :text="color"
      primary-button="Delete"
      @primary-clicked="deleteColor(index)"
    />
  </main>
</template>

<script>
export default {
  name: "ClList",
  props: {
    colors: Array,
  },
  methods: {
    deleteColor(index) {
      this.$emit("delete-color", {
        index: index,
      });
    },
  },
  emits: ["delete-color"],
};
</script>
