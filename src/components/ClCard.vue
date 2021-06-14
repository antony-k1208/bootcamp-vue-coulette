<template>
  <div class="card" :style="{ 'background-color': color }">
    <h1 v-if="title">{{ title }}</h1>
    <p>{{ text }}</p>
    <ClButton
      :title="primaryButton"
      @click="primaryClicked"
      :class="{ disabled: primaryDisabled }"
    />
    <ClButton
      v-if="secondaryButton"
      :title="secondaryButton"
      @click="secondaryClicked"
      :class="{ disabled: secondaryDisabled }"
    />
  </div>
</template>

<script>
export default {
  name: "ClCard",
  props: {
    title: String,
    text: String,
    primaryButton: String,
    secondaryButton: String,
    primaryDisabled: {
      type: Boolean,
      default: false,
    },
    secondaryDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.text;
    },
  },
  methods: {
    primaryClicked() {
      if (!this.primaryDisabled) {
        this.$emit("primary-clicked");
      }
    },
    secondaryClicked() {
      if (!this.secondaryDisabled) {
        this.$emit("secondary-clicked");
      }
    },
  },
  emits: ["primary-clicked", "secondary-clicked"],
};
</script>

<style scoped>
.card {
  max-width: 600px;
  padding: 20px;
  color: white;
  border-radius: 20px;
  text-align: center;
}

.disabled {
  background-color: grey;
}

p {
  heigt: 40px;
  color: white;
  border: 1px, solid, white;
}
</style>
