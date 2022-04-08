<template>
  <div>
    <button @click="$store.commit('increment')">Nut tang</button>
    <button @click="$store.commit('decrement')">Nut giam</button>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import { mapState } from "vuex";
export default {
  name: "DisplayCounter",
  methods: {
    ...mapState(["increment", "decrement"]),
  },
};
</script>
