<template>
  <ClCard
    title="Welcome to Coulette"
    :text="color"
    primary-button="Generate Color"
    secondary-button="Save Color"
    @primary-clicked="generateColor"
    @secondary-clicked="saveColor"
    :secondary-disabled="buttonDisabled"
  ></ClCard>
</template>

<script>
export default {
  name: "ClHeader",
  props: {
    colors: Array,
  },
  data() {
    return {
      color: "",
    };
  },
  computed: {
    buttonDisabled() {
      return this.colors.includes(this.color);
    },
  },
  methods: {
    generateColor() {
      this.color = this.randomHexColor(); // #FFFFFF

      localStorage.setItem("color", this.color);
    },
    saveColor() {
      this.$emit("save-color", {
        color: this.color,
      });
    },
    /**
     * Toggle color of header
     * Generate random number between min and max
     */
    randomNumber(min, max) {
      const num = Math.random() * (max - min + 1) + min;
      return Math.floor(num);
    },

    /**
     * Generate random hex number for color
     */
    randomHexNumber() {
      let hex = this.randomNumber(0, 255).toString(16);
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return hex;
    },

    /**
     * Generate random hex color
     */
    randomHexColor() {
      const red = this.randomHexNumber();
      const green = this.randomHexNumber();
      const blue = this.randomHexNumber();

      return ("#" + red + green + blue).toUpperCase();
    },
  },

  created() {
    //variables / get JSON-string and parse it
    let colorFromStorage = localStorage.getItem("color");

    //check whether the local storage is empty
    if (colorFromStorage !== null) {
      //only if local storage is not empty, update the Array with the content
      this.color = colorFromStorage;
    } else {
      this.generateColor();
    }
  },
  emits: ["save-color"],
};
</script>
