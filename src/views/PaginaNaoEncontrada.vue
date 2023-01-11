<template>
<div class="error">
  <h1>404</h1>
  <h2>Página não encontrada.</h2>
  <router-link to="/" class="backToHome">Voltar para home </router-link>
</div>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada",
  created() {
    document.title = "Página não encontrada | Ranek"
  }
};
</script>

<style scoped>

.error{
    text-align: center;
}
h1{
    font-size: 18vmin;
    margin: 60px auto 10px;
    color: #e61;
}
h2{
    font-size: 5vmin;
    margin-bottom: 50px;
}
.backToHome{
    text-transform: uppercase;
    background-color: #87f;
    padding: 15px 35px;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
}
.backToHome:hover{
    background: #65d;
    transform: scale(1.15);
}
</style>
