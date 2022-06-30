Vue.component('page-search', {
    props: ['films'],
    data: function () {
        return {
            search: '',
        }
    },
    methods: {
        searchFilmByName(event) {
            this.$emit('eventname', true)
            event.preventDefault();
            setTimeout(function () {
                this.$emit('eventname', false)
                const localsFilms = []
                if (this.search !== '') {
                    for (i = 0; i < this.films.length; i++) {
                        if (this.films[i].name.toLowerCase().trim().search(this.search.toLowerCase()) !== -1) {
                            localsFilms.push(this.films[i])
                        }
                    }
                    this.$emit('eventload', localsFilms)
                }
                else{
                    this.$emit('eventload', this.films)
                }
            }.bind(this), 1000)
        },
    },
    template: '<form class="page__search"><input class="page__search__input" type="text" placeholder="Введите название фильма" v-model="search"/> <button class="page__search__input__icon" @click="searchFilmByName($event)"></button> </form>'
})

var app = new Vue({
    template: '',
    data: {
        baseURL: 'imgs/',
        sFilms: [],
        isLoading: false,
        currentFilm: undefined,

        date: undefined,
        time: undefined,
        loc: undefined,
        contacts: '',
        isPrint: false,
        tickedType: undefined,

        films: [
            {
                id: 1,
                name: 'Uncharted',
                desc: 'Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу Салли отправляются на поиски величайшего сокровища мира. Кроме того, они надеются найти улики, которые приведут их к давно потерянному брату Нейтана.',
                poster: 'image_1.png',
                rating: '4.3'
            },
            {
                id: 2,
                name: 'Человек-паук: Вдали от дома',
                desc: 'Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу Салли отправляются на поиски величайшего сокровища мира. Кроме того, они надеются найти улики, которые приведут их к давно потерянному брату Нейтана.',
                poster: 'image_2.png',
                rating: '3.5'
            },
            {
                id: 3,
                name: 'Гарри Поттер и философский камень',
                desc: 'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что...',
                poster: 'image_3.png',
                rating: '4.1'
            },
            {
                id: 4,
                name: 'Титаник',
                poster: 'image_4.png',
                desc: '',
                rating: '3.7'
            },
            {
                id: 5,
                name: 'King Kong',
                poster: 'image_5.png',
                desc: '',
                rating: '5.0'
            },
            {
                id: 6,
                name: 'This Gun For Hire',
                poster: 'image_6.png',
                desc: '',
                rating: '2.5'
            },
        ]

    },
    methods: {
        init() {
            this.sFilms = this.films
        },
        isLoadingHandler(value) {
            this.isLoading = value
        },
        eventLoadHandler(value) {
            this.sFilms = value
        },
        watchFilm(id){
            this.isPrint = false
            this.currentFilm = this.films.find(film => film.id === id)
        },
        print(){
            this.isPrint = true
        },
        closePrint(){
            this.isPrint = false
        }
    },
    beforeMount() {
        this.init()
    },

}).$mount('#app')
