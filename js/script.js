console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    musics: [],
    selectedGenre: "All",
  },
  computed: {
    sortedMusics(){
      return this.musics.sort((a, b) => {
        return a.year - b.year;
      });
    },
    genresList(){
      const genresList = [];
      this.musics.forEach(music => {
        if(!genresList.includes(music.genre))genresList.push(music.genre);                
      });
      return genresList;
    },
    filteredMusics(){
      const musics = this.sortedMusics;
      if(this.selectedGenre === 'All') return musics;
      return musics.filter((music)=>{
        return music.genre === this.selectedGenre;
      })
    },
  },
  methods: {},
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
        const music = res.data.response;
        this.musics = music;
    });
},
});
