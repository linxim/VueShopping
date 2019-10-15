<template >
  <div class="z-table">
    <Shoptable />
  </div>
</template>
<script>
import Shoptable from "./common/Shoptable";
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Shoptable
  }
};
</script>
<style scoped>
.z-table{
  position: relative;
  top: 170px;
}
</style>