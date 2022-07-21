<template>
  <div class="container">
    <div class="title">ログイン</div>
    <form @submit.prevent="signin">
      <div class="row align-items-center form">
        <div class="col-2" style="text-align: center">
          <label for="inputId" class="col-form-label">ID</label>
        </div>
        <div class="col-auto">
          <input
            v-model="id"
            placeholder="ユーザーID"
            type="text"
            id="inputId"
            class="form-control"
          />
        </div>
      </div>
      <div class="row align-items-center form">
        <div class="col-2" style="text-align: center">
          <label for="inputPassword" class="col-form-label">パスワード</label>
        </div>
        <div class="col-auto">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="password"
            placeholder="パスワード"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div v-if="err" class="text-danger err">
        {{ err }}
      </div>
      <div class="row align-items-center" style="justify-content: center">
        <a class="btn btn-link fs-6" style="margin-bottom: 5px"
          >新規登録はこちら</a
        >
        <div class="d-grid col-3">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="!isCompleted"
          >
            ログイン
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import client from "../../api_client";

export default {
  name: "LoginForm",
  data() {
    return {
      id: "",
      password: "",
      err: "",
    };
  },
  computed: {
    isCompleted: function () {
      return this.id && this.password;
    },
  },
  methods: {
    signin: function () {
      const data = {
        id: this.id,
        password: this.password,
      };
      client
        .post("/api/signin", data)
        .then((res) => {
          // FIXME: statusを200にする
          if (res.status == 201) {
            this.$router.push("/groups/menu");
          }
        })
        .catch((err) => {
          console.log(err);
          this.err = "IDかパスワードが間違っています。";
        });
    },
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

.form {
  justify-content: center;
  padding: 10px 0;
}

.err {
  text-align: center;
  padding: 10px 0;
}
</style>