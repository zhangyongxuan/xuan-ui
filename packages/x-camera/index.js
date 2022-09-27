import myCamera from './my-camera.vue';

myCamera.install = function (Vue) {
  Vue.component(myCamera.name, myCamera);
};

export default myCamera;
