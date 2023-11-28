new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    methods: {
        traerPeliculas: function () {
            console.log('megameg');
        }
    },
    mounted() {
        this.traerPeliculas()
    }
  })