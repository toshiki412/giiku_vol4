<template>
  <my-header></my-header>
  <div class="title">仕事内容</div>
  <div class="container">
    <div class="row" style="justify-content: center">
      <div class="card col-8" style="margin: 10px 0">
        <div class="card-body">
          <div>
            <p>カテゴリー: {{ review.category_name }}</p>
            <h1 class="job-title">{{ review.name }}</h1>
          </div>
          <div class="job-content">
            <p>内容:</p>
            <p>{{ review.note }}</p>
          </div>
          <p>星: {{ review.star }}</p>
        </div>
      </div>
    </div>
    <div>
      <router-link
        class="btn btn-primary float-end"
        role="button"
        style="padding: 6px 25px"
        :to="{ name: 'UserJobs', params: { groupId: this.groupId } }"
        >戻る</router-link
      >
    </div>
  </div>
</template>

<script>
import client from "../../api_client";
import MyHeader from "../modules/MyHeader.vue";
export default {
  name: "JobContent",
  props: ["groupId", "reviewId"],
  components: {
    MyHeader,
  },
  data() {
    return {
      review: null,
    };
  },
  beforeMount: function () {
    client
      .get(`/api/groups/${this.groupId}/reviews/${this.reviewId}`)
      .then((response) => (this.review = response.data))
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