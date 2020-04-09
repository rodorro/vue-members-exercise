import Router, { RouteConfig } from 'vue-router';
import { MemberTable } from './components/memberTable';
import { MemberEdit } from './components/memberEdit';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/memberTable' },
  { path: '/memberTable', component: MemberTable },
  { path: '/member/:id', component: MemberEdit, props: true },
];

export const router = new Router({
  routes,
});
