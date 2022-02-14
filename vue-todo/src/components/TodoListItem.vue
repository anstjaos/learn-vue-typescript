<template>
  <li>
    <span>{{ todoItem }}</span>
    <button @click="deleteTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    todoItem: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit("delete", this.index);
    },
  },
});
</script>

<style scoped></style>
