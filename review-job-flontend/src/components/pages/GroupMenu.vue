<template>
  <div class="container">
    <div class="title">メニュー画面</div>
    <div class="row align-items-center content">
      <router-link
        class="btn btn-primary btn-lg col-5"
        role="button"
        :to="{ name: 'SelectGroup' }"
        >グループを選ぶ</router-link
      >
    </div>
    <div class="row align-items-center content">
      <router-link
        class="btn btn-primary btn-lg col-5"
        role="button"
        :to="{ name: 'JoinGroup' }"
        >グループに入る</router-link
      >
    </div>
    <div class="row align-items-center content">
      <router-link
        class="btn btn-primary btn-lg col-5"
        role="button"
        :to="{ name: 'CreateGroup' }"
        >グループを作る</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupMenu",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin: 50px 0;
}

.content {
  justify-content: center;
  padding: 10px 0;
}
</style>