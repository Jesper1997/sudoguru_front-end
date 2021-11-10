<template>
  <div b-col lg="4" class="pub-2">
    <b-button
      v-on:click="AddValue()"
      v-bind:class="{
        wrongbutton: !this.square.correct,
        button: Darkercolor,
        otherbutton: !Darkercolor,
      }"
      ><h3>{{ square.value }}</h3></b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      Darkercolor: false,
    };
  },
  name: "Square",
  props: ["square", "value"],

  created() {
    if (
      ((this.square.x <= 2 || this.square.x >= 6) &&
        (this.square.y <= 2 || this.square.y >= 6)) ||
      (this.square.x > 2 &&
        this.square.x < 6 &&
        this.square.y > 2 &&
        this.square.y < 6)
    ) {
      this.Darkercolor = true;
    } else {
      this.Darkercolor = false;
    }
  },

  methods: {
    AddValue() {
      console.log("new value =", this.value);
      this.square.value = this.value;
    },
  },
};
</script>

<style scoped>
:focus:not(:focus-visible) {
  outline: 0;
  box-shadow: none;
}

:focus,
.focus-visibble:focus:not(:focus-visible) {
  outline: 0;
  box-shadow: 0 0 0 0.2rem #fff, 0 0 0 0.35rem #069;
}

.button {
  background-color: #00b118 /*rgb(0, 177, 24)*/;
}
.otherbutton {
  background-color: #00ff22 /*rgb(0, 255, 34)*/;
}
.wrongbutton {
  color: white;
  background-color: red;
}

button {
  padding: 6px;
  min-width: 50px;
}
button:hover {
  transform: scale(1.1);
}
</style>