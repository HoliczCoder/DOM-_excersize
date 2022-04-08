<template>
  <div>
    {{ $store.state.count }}
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import { mapMutations } from "vuex";
export default {
  name: "ControlCounter",
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>
