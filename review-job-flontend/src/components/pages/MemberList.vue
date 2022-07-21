<template>
  <my-header></my-header>
  <div class="title">メンバー一覧</div>
  <div class="container">
    <div class="row">
      <div
        class="row"
        style="justify-content: center"
        v-for="m in members"
        v-bind:key="m.id"
      >
        <router-link
          class="card border-dark text-body col-6"
          style="text-decoration: none; margin: 10px 0"
          :to="{ name: 'UserJobs', params: { groupId: this.groupId } }"
        >
          <div class="card-body">
            <div class="card-title fs-4">{{ m.name }}</div>
            <div class="card-text mb-2 text-muted">
              バイト投稿数<span style="padding-left: 20px"
                >{{ m.review_counts }}件</span
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <button class="btn btn-secondary float-end" @click="getCode">
      グループ招待コード
    </button>
  </div>
</template>

<script>
import client from "../../api_client";
import MyHeader from "../modules/MyHeader.vue";
export default {
  name: "MemberList",
  props: ["groupId"],
  components: {
    MyHeader,
  },
  data() {
    return {
      members: null,
    };
  },
  mounted: function () {
    client
      .get(`/api/groups/${this.groupId}/members`)
      .then((response) => (this.members = response.data.members))
      .catch((error) => console.log(error));
  },
  methods: {
    getCode: function () {
      alert("招待コードをコピーしました！");
    },
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