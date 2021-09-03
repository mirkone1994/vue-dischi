console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: [],
  },
  computed: {
    sortedMusics(){
      return this.musics.sort((a, b) => {
        return a.year - b.year;
      });
    }
  },
  methods: {},
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
        const music = res.data.response;
        this.musics = music;
    });
},
});
