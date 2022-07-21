<template>
  <my-header></my-header>
  <div class="title">仕事リスト</div>
  <div class="container">
    <div
      class="row"
      style="justify-content: center"
      v-for="r in reviews"
      v-bind:key="r.id"
    >
      <router-link
        class="card border-dark text-body col-6"
        style="text-decoration: none; margin: 10px 0"
        :to="{
          name: 'JobContent',
          params: { groupId: this.groupId, reviewId: r.id },
        }"
      >
        <div class="card-body">
          <div class="card-title fs-4">{{ r.name }}</div>
          <div class="card-text mb-2 text-muted">
            カテゴリー: {{ r.category_name }}
          </div>
        </div>
      </router-link>
    </div>

    <div>
      <router-link
        class="btn btn-primary float-end"
        role="button"
        style="padding: 6px 25px"
        :to="{ name: 'Members', params: { groupId: this.groupId } }"
        >戻る</router-link
      >
    </div>
  </div>
</template>

<script>
import client from "../../api_client";
import MyHeader from "../modules/MyHeader.vue";
export default {
  name: "UserJobList",
  props: ["groupId"],
  components: {
    MyHeader,
  },
  data() {
    return {
      reviews: null,
    };
  },
  mounted: function () {
    client
      .get(`/api/groups/${this.groupId}/reviews`)
      .then((response) => (this.reviews = response.data.reviews))
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin-top: 10px;
  background-color: #dddddd;
}
</style>