<template>
  <ClHeader @save-color="onSave" :colors="colors" />
  <ClList :colors="colors" @delete-color="onDelete" />
</template>

<script>
import ClHeader from "@/components/ClHeader.vue";
import ClList from "@/components/ClList.vue";

export default {
  name: "App",
  components: {
    ClHeader,
    ClList,
  },
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    onSave(eventObj) {
      this.colors.push(eventObj.color);

      localStorage.setItem("arr", JSON.stringify(this.colors));
    },
    onDelete(eventObj) {
      this.colors.splice(eventObj.index, 1);
    },
  },
  created() {
    //variables / get JSON-string and parse it
    let colorsFromStorage = JSON.parse(localStorage.getItem("arr"));

    //check whether the local storage is empty
    if (colorsFromStorage !== null) {
      //only if local storage is not empty, update the Array with the content
      this.colors = colorsFromStorage;
    }
  },
};
</script>

<style lang="scss"></style>
