console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: [],
  },
  methods: {},
  created(){
    for(let i = 0; i < 1; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
        const music = res.data.response;
        this.musics.push(music);
    });
  }
},
});
