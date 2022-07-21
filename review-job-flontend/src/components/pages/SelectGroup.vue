<template>
  <div class="container">
    <div class="title">グループを選択してください</div>
    <div
      class="row"
      style="justify-content: center"
      v-for="g in groups"
      v-bind:key="g.id"
    >
      <router-link
        type="button"
        class="card border-dark text-body col-6"
        style="text-decoration: none; margin: 10px 0"
        :to="{ name: 'Members', params: { groupId: g.id } }"
      >
        <div class="card-body">{{ g.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import client from "../../api_client";
export default {
  name: "SelectGroup",
  props: ["groupId"],
  data() {
    return {
      groups: [],
    };
  },
  mounted: function () {
    client
      .get("/api/groups")
      .then((response) => (this.groups = response.data.groups))
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin: 50px 0;
}
</style>