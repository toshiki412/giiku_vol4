import { createRouter, createWebHistory } from 'vue-router'
import MemberList from './components/pages/MemberList.vue'
import UserJobList from './components/pages/UserJobList.vue'
import JobContent from './components/pages/JobContent.vue'
import CategorySearch from './components/pages/CategorySearch.vue'
import ReviewPost from './components/pages/ReviewPost.vue'
import SelectGroup from './components/pages/SelectGroup.vue'
import GroupMenu from './components/pages/GroupMenu.vue'
import JoinGroup from './components/pages/JoinGroup.vue'
import CreateGroup from './components/pages/CreateGroup.vue'
import LoginForm from './components/pages/LoginForm.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/groups/:groupId/members',
    name: 'Members',
    props: true,
    component: MemberList,
  },
  {
    path: '/groups/:groupId/members/jobs',
    name: 'UserJobs',
    props: true,
    component: UserJobList,
  },
  {
    path: '/groups/:groupId/reviews/:reviewId',
    name: 'JobContent',
    component: JobContent,
    props: true
  },
  {
    path: '/category',
    name: 'CategorySearch',
    component: CategorySearch,
  },
  {
    path: '/groups/:groupId/review',
    name: 'ReviewPost',
    component: ReviewPost,
  },
  {
    path: '/groups',
    name: 'SelectGroup',
    component: SelectGroup,
  },
  {
    path: '/groups/menu',
    name: 'GroupMenu',
    component: GroupMenu,
  },
  {
    path: '/groups/join',
    name: 'JoinGroup',
    component: JoinGroup,
  },
  {
    path: '/groups/make',
    name: 'CreateGroup',
    component: CreateGroup,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router