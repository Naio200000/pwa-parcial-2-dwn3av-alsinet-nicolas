Vue.component('componente-form', {
    data: function (){
        return {
            seleccionado: '',
            preferencia: {
                cine:{
                    cine2d: "Cine 2D", 
                    cine3d: "Cine 3D", 
                    cine4d: "Cine 4D", 
                    imax: "Imax"
                },
                casa:{
                    netflix: "Netflix",
                    disney: "Disney +",
                    amazon_prime: "Amazon Prime",
                    hbo_max: "HBO Max"
                }
            },
            prefiero:"",
            nombre: "",
            apellido: "",
            peliculas:[
                "x2001_a_space_odyssey",
                "aliens",
                "beetlejuice",
                "goodfellas",
                "jurassic_park",
                "parasite",
                "psycho",
                "pulp_fiction",
                "star_wars",
                "the_godfather"
            ],
            peliculasSeleccionadas:[],
        }
    },
    methods: {
        formatearNombre(string) {
            if (string.charAt(0) == 'x') {
                string = string.slice(1)
            }
            str = string.replaceAll("_", " ");
            let array = str.split(' ');
            let Marray = array.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
            let resultado = Marray.join(' ');
            return resultado
        },
        guardarDatos(){
            let obj = {
                nombre: this.nombre,
                apellido: this.apellido,
                prefiero: this.prefiero,
                pelis: this.peliculasSeleccionadas
            }
            localStorage.setItem('local', JSON.stringify(obj));
        },
        borrarDatos(){
            localStorage.clear()
            window.location.href = window.location.href
        }
    },
    template:`
    <section class="container">
        <form>
            <div class="row">
                <div class="col">
                    <div class="my-3">
                        <h2>Ingresa tus Datos</h2>
                    </div>
                    <div class="row py-2">
                        <div class="col form-floating">
                            <input required v-model="nombre" class="form-control" type="text" name="name" id="name" placeholder="a">
                            <label class="form-label ps-3" for="name">Nombre</label>
                        </div>
                        <div class="col form-floating">
                            <input required v-model="apellido" class="form-control " type="text" name="lastName" id="lastName" placeholder="a">
                            <label class="form-label ps-3" for="lastName">Apellido</label>
                        </div>
                    </div>
                </div>
                <div class="col contenedor">
                    <div class="my-3">
                        <h2>Otros datos importantes</h2>
                    </div>
                    <div>
                        <h3 class="h6 mt-4 mb-2 pt-2">Como preferís ver peliculas</h3>
                        <div class="row">
                            <div class="col" v-for="(item, key) of preferencia">
                                <div class="form-check">
                                    <input required class="form-check-input" type="radio" name="verPeliculas" :id=key v-model="seleccionado" :value="key">
                                    <label class="form-check-label" :for=key>{{key | mayuscula}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div v-if="seleccionado == 'cine'" class="row">
                            <h3 class="h6 my-2 pt-2">Cual es tu plataforma de stream preferida</h3>
                            <div class="col" v-for="(item, key) of preferencia.cine">
                                <componente-radio :input="key" v-model="prefiero" :label="item" :key="key"></componente-radio>
                            </div>
                        </div>
                        <div v-if="seleccionado == 'casa'"  class="row">
                            <h3 class="h6 my-2 pt-2">Cual es tu plataforma de stream preferida</h3>
                            <div class="col" v-for="(item, key) of preferencia.casa">
                                <componente-radio :input="key" v-model="prefiero" :label="item" :key="key"></componente-radio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-auto row">
                <h3 class="h4 mt-4 mb-2 pt-2 text-center">Estas son las 10 peliculas que si o si hay que ver.</h3>
                <p>¿Vos cuales viste?</p>
                <div class="row">
                    <div class="col-5">            
                        <div class="form-check form-switch" v-for="item in peliculas">
                            <input v-model="peliculasSeleccionadas" class="form-check-input" type="checkbox" :id="item" :value="item">
                            <label class="form-check-label fs-5" :for="item">{{formatearNombre(item)}}</label>
                        </div>
                    </div>
                    <componente-gridImg :peliculasSeleccionadas="peliculasSeleccionadas"></componente-gridImg>
                </div>
            </div>
            <div class="mx-auto row justify-content-center">
                <input @click="guardarDatos()" class="rounded-3 my-5 text-light bg-primary me-4 col-8 fs-3 d-inline-block" type="submit" value="Mostrar y Guardar los datos">            
                <input @click="borrarDatos()" class="rounded-3 my-5 text-light bg-primary col-3 fs-3 d-inline-block" type="button" value="Borrar los Datos">
            </div>
        </form>
    </section>
    `
})
Vue.component('componente-gridImg',{
    props:['peliculasSeleccionadas'],
    methods:{
        cambiarImagen(string){
            for(value of this.peliculasSeleccionadas) {
                if(value == string) {
                    return true
                }
            }
        }
    },
    template:`
    <div class="col-7 d-flex  flex-wrap">
        <div class="Wing p-1">
            <img :src="cambiarImagen('x2001_a_space_odyssey') ? './img/2001-a-space-odyssey.jpg' : './img/bn/2001-a-space-odyssey.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('aliens') ? './img/aliens.jpg' : './img/bn/aliens.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('beetlejuice') ? './img/beetlejuice.jpg' : './img/bn/beetlejuice.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('goodfellas') ? './img/goodfellas.jpg' : './img/bn/goodfellas.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('jurassic_park') ? './img/jurassic-park.jpg' : './img/bn/jurassic-park.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('parasite') ? './img/parasite.jpg' : './img/bn/parasite.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('psycho') ? './img/psycho.jpg' : './img/bn/psycho.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('pulp_fiction') ? './img/pulp-fiction.jpg' : './img/bn/pulp-fiction.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('star_wars') ? './img/star-wars.jpg' : './img/bn/star-wars.jpg'" alt="">
        </div>
        <div class="Wing p-1">
            <img :src="cambiarImagen('the_godfather') ? './img/the-godfather.jpg' : './img/bn/the-godfather.jpg'" alt="">
        </div>
    </div>
    `
})
Vue.component('componente-radio', {
    props:['input','label'],
    methods: {
        selectPrefiero: function (value) {
            this.$emit('input', value);
        }
    },
    template:`
        <div class="form-check">
            <input v-on:input="selectPrefiero($event.target.value)" class="form-check-input" type="radio" :name="input" :id="input" :value="input">
            <label class="form-check-label" :for="input">{{label}}</label>
        </div>
    `
})
Vue.component('componente-mostrar', {
    data:function (){
        return {
            datos:{},
            rankingImg:"",
            rankingAlt:"",
            prefImg:"",
            pregAlt:""
        }
    },
    template:`
        <section v-if="traerStorage()">
            <div class="container-fluid container-md">
                <div class="card">
                    <h2 class="card-header text-center fs-4">Resultados</h2>
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-2 pb-4 container mx-auto">
                            <div class="col">
                                <p class="h5 my-3">Tu ranking the cinefilo es...</p>
                                <img :src=rankingImg :alt=rankingAlt class="rounded-circle img-avatar">
                                <figcaption class="my-3 text-secondary">los rankings no tiene valor alguno.</figcaption>
                            </div>
                            <div class="col">
                                <div class="card-body">
                                    <h3 class="card-title h2 mb-3">{{datos.nombre}} {{datos.apellido}}</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <p class="h5 my-3">Tu plataforma preferida para ver peliculas es:</p>
                                    <img :src=prefImg :alt=pregAlt>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <componente-cards :pelis=datos.pelis></componente-cards>
        </section>
    `,
    methods: {
        traerStorage(){
            if(!localStorage.local){
                return false;
            } else {
                this.datos = JSON.parse(localStorage.getItem("local"))
                this.calcularRanking(this.datos.pelis)
                this.traerPreferencia(this.datos.prefiero)
                return this.datos
            }
        },
        calcularRanking(array){
            let n = array.length
            switch (n) {
                case n = 10:
                case n = 9:
                case n = 8:
                    this.rankingImg = "./img/avatars/luna.jpg";
                    this.rankingAlt = 'Iconica imagen de la pelicula "Viaje a la Luna" donde la nave choca contra el ojo en la cara de la luna';
                    break;
                case n = 7:
                case n = 6:
                    this.rankingImg = "./img/avatars/psycho.jpg";
                    this.rankingAlt = 'Iconica imagen de la pelicula "Psicosis" donde una mujer grita en la ducha';
                    break;
                case n = 5:
                case n = 4:
                    this.rankingImg = "./img/avatars/scream.jpg";
                    this.rankingAlt = 'Imagen de la pelicula "Scream" Donde el asesino esta parado con un cuchillo';
                    break;
                case n = 3:
                case n = 2:
                    this.rankingImg = "./img/avatars/avatar.jpg";
                    this.rankingAlt = 'Imagen de la pelicula "Avatar" donde se puede ver uno de los personajes en primer plano';
                    break;
                default:
                    this.rankingImg = "./img/avatars/facepalm.jpg";
                    this.rankingAlt = 'Meme de Picard haciendo facepalm';
                    break;
            }
        },
        traerPreferencia(string){
            if (string == ''){
                this.prefImg = `./img/logos/sin_seleccion.png`;
                this.pregAlt = `Imagen de mujer no entendiendo`
            }else {
                this.prefImg = `./img/logos/${string}.png`;
                this.pregAlt = string
            }
        }
    }
})
Vue.component('componente-cards',{
    data:function(){
        return {
            peliculasInfo:{
                x2001_a_space_odyssey: {
                    nombrePeli: "2001 A Space Odyssey",
                    director: "Stanley Kubrick",
                    lanzamiento: "1968",
                    img: "./img/2001-a-space-odyssey",
                },
                aliens:{
                    nombrePeli: "Aliens",
                    director: "James Cameron",
                    lanzamiento: "1986",
                    img: "./img/aliens",
                },
                beetlejuice: {
                    nombrePeli: "Beetlejuice",
                    director: "Tim Burton",
                    lanzamiento: "1988",
                    img: "./img/beetlejuice",  
                },
                goodfellas: {
                    nombrePeli: "Goodfellas",
                    director: "Martin Scorsese",
                    lanzamiento: "1990",
                    img: "./img/goodfellas",
                },
                jurassic_park: {
                    nombrePeli: "Jurassic Park",
                    director: "Steven Spielberg",
                    lanzamiento: "1993",
                    img: "./img/jurassic-park",
                },
                parasite: {
                    nombrePeli: "Parasite",
                    director: "Bong Joon Ho",
                    lanzamiento: "2019",
                    img: "./img/parasite",
                },
                psycho: {
                    nombrePeli: "Psycho",
                    director: "Alfred Hitchcock",
                    lanzamiento: "1960",
                    img: "./img/psycho",
                },
                pulp_fiction: {
                    nombrePeli: "Pulp Fiction",
                    director: "Quentin Tarantino",
                    lanzamiento: "1994",
                    img: "./img/pulp-fiction",
                },
                star_wars: {
                    nombrePeli: "Star Wars",
                    director: "Jorge Lucas",
                    lanzamiento: "1977",
                    img: "./img/star-wars",
                },
                the_godfather: {
                    nombrePeli: "The Godfather",
                    director: "Francis Ford Coppola",
                    lanzamiento: "1972",
                    img: "./img/the-godfather",
                }
            }
        }
    },
    props:['pelis'],
    template:`
        <article class="container-fluid container-md">
            <div>
                <h2 class="w-75 w-lg-100 text-center my-2 mx-auto px-2">Estas son las peliculas que viste.</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-2 pb-4 container mx-auto bg-light">
                <div v-for="peli in pelis">
                    <div class="col" v-for="(item, key) of peliculasInfo" v-if="key == peli">
                    <div class="card tarjetas-producto">
                        <img :src="item.img + '.jpg'" class="card-img-top" :alt="'Poster de la Pelicula ' + item.nombrePeli">
                        <div class="card-body">
                            <h3 class="card-title h5">{{item.nombrePeli}}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Director: </b>{{item.director}}</li>
                            <li class="list-group-item"><b>Estrenada en :</b>{{item.lanzamiento}}</li>
                        </ul>
                    </div>
                    </div> 
                </div>
            </div>
        </article>
    `
})
Vue.filter('mayuscula', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});  
var app = new Vue({
    el: ".contenedor",
    data: {
    }
});