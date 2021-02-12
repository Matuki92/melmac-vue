import { createWebHistory, createRouter } from "vue-router";
import { homeImgSources } from './utils/homeImagesConfig';
import { aboutImgSources } from './utils/aboutImagesConfig';
import loadImage from "./utils/loadImage";
import useMainState from "./state/useMainState";

const {
  loading,
  homeReady,
  aboutReady,
} = useMainState();

const loadView = (view, imgSources, readyRef) => {
  if (!readyRef.value) {
    return () => new Promise((resolve) => {
      loading.value = true;
    
      Promise.all(imgSources.map(loadImage))
        .then(() => {
          resolve(import(/* webpackChunkName: "view-[request]" */ `@/components/views/${view}.vue`));
          loading.value = false;
          readyRef.value = true;
        });
    });
  } else {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/views/${view}.vue`);
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView('Home', homeImgSources, homeReady),
  },
  {
    path: "/about",
    name: "About",
    component: loadView('About', aboutImgSources, aboutReady),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
