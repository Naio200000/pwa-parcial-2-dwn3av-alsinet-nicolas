new Vue({
    el: '#app2',
    data: {
        urlkey:  "http://www.omdbapi.com/?apikey=3c08695a",
    },
    vuetify: new Vuetify(),
    methods: {
        traerPeliculas: function () {
            
        }
    },
    mounted() {
        this.traerPeliculas()
    }
  })
