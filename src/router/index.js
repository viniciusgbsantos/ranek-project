import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoView from "../views/ProdutoView.vue";
import LoginView from "../views/LoginView.vue";
import UsuarioView from "../views/usuario/UsuarioView.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";
import PaginaNaoEncontrada from "../views/PaginaNaoEncontrada.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    component: PaginaNaoEncontrada
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProdutoView,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/usuario",
    component: UsuarioView,
    meta: {
      login: true
    },
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      }
    ]
  }
] 




const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, 
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" }); 
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});  

export default router
