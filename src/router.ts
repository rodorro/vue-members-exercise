import Router, { RouteConfig } from 'vue-router';
import { MemberTable } from './components/memberTable';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/memberTable' },
  { path: '/memberTable', component: MemberTable },
  // { path: '/recipe', component: RecipeListPageContainer },
  // { path: '/recipe/:id', component: EditRecipePage, props: true },
];

export const router = new Router({
  routes,
});
