var app = new Vue({
    template: '<div  class="page"> <div class="page__logo"> Онлайн-кинотеатр “HelloWorld” </div><form class="page__search"> <input class="page__search__input" type="text" placeholder="Введите название фильма" v-model="search"/> <button class="page__search__input__icon" @click="searchFilmByName($event)"></button> </form> <div class="page__films"> <div class="page__films__404" v-if="sFilms.length===0">Не найдено :(</div><div class="page__films__item" v-for="item in sFilms"> <div class="page__films__item__poster" v-bind:style="{backgroundImage: \'url(\' + baseURL+ item.poster + \')\'}"></div><div class="page__films__item__name">{{item?.name}}</div><div class="page__films__item__rating"> <div class="page__films__item__rating__icon"> </div><div class="page__films__item__rating__value">{{item?.rating}}</div></div><div class="page__films__item__desc">{{item?.desc}}</div><div class="page__films__item__button"> <div class="page__films__item__button__icon"> </div><div class="page__films__item__text"> Смотреть </div></div></div></div></div>',
    data: {
        baseURL: 'imgs/',
        search: '',
        sFilms: [],
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

        searchFilmByName(event) {
            event.preventDefault();
            this.sFilms = []
            if (this.search !== '') {
                for (i = 0; i < this.films.length; i++) {
                    if (this.films[i].name.toLowerCase().trim().search(this.search.toLowerCase()) !== -1) {
                        this.sFilms.push(this.films[i])
                    }
                }
            } else {
                this.sFilms = this.films
            }
        },
        // watch: {
        //     search: function (value) {
        //     },
        //     films: function (value) {
        //     },
        //     sFilms: function (value) {
        //     }
        // },

    },
    beforeMount() {
        this.init()
    },

}).$mount('#app')
