<template>
    <div class="header-content">
        <div class="header-left">
            <h1>神バイトを求めて</h1>
        </div>
        <div class="header-right">
            <div class="nav-item">
                <p class="icon-image"><i class="fa-solid fa-users"></i></p>
                <p>メンバー一覧</p>
            </div>
            <div class="nav-item">
                <p class="icon-image"><i class="fa-solid fa-comment"></i></p>
                <p>投稿</p>
            </div>
            <div class="nav-item">
                <p class="icon-image"><i class="fa-solid fa-magnifying-glass"></i></p>
                <p>カテゴリー検索</p>
            </div>
            <div class="nav-item">
                <p class="icon-image"><i class="fa-solid fa-house"></i></p>
                <p>ログアウト</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    margin: 0.5rem;
    font-size: 0.75rem;
    text-align: center;
}
h1 {
    margin: 0;
}
.header-content {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
}
.header-left {
    margin-left: 2rem;
    display: flex;
    align-items: center;
}
.header-right {
    display: flex;
    justify-content: space-between;
}
.icon-image {
    text-align: center;
}
i {
    font-size: 2.5rem;
}
.nav-item {
}
</style>