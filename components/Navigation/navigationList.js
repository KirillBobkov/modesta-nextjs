export const  navigationTree = [
    {
        parent: {
            path: '/',
            value: 'Главная',
        },
        childs: [
            {
                path: '/#history',
                value: 'О нас',
            },
            {
                path: '/#advantages',
                value: 'Преимущества',
            },
            {
                path: '/#tech',
                value: 'Характеристики',
            },
            {
                path: '/#submit',
                value: 'Оставить заявку',
            },
            {
                path: '/#contacts',
                value: 'Контакты',
            },
        ]
    },
    {
        parent: {
            path: '/production',
            value: 'Разработка',
        },
    },
    {
        parent: {
            path: '/info',
            value: 'Узнать больше',
        },
        childs: [
            {
                path: '/info#videos',
                value: 'Видео',
            },
            {
                path: '/info#articles',
                value: 'Статьи на интернет-ресурсах',
            },
            {
                path: '/info#faq',
                value: 'Ответы на вопросы',
            },
        ]
    },
    {
        parent: {
            path: '/buy',
            value: 'Получить протез',
        },
        childs: [
            {
                path: '/buy#steps',
                value: 'Этапы протезирования',
            },
            {
                path: '/buy#ways',
                value: 'Способы получения протеза',
            },
        ]
    },
    {
        parent: {
            path: '/team',
            value: 'Наша команда',
        },
    },
    {
        parent: {
            path: '/roadmap',
            value: 'Дорожная карта',
        },
    },
]