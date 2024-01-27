export const  navigationTree = [
    {
        parent: {
            path: '/',
            value: 'Главная',
        },
        childs: [
            {
                path: '/#advantages',
                value: 'Преимущества',
            },
            {
                path: '/#tech',
                value: 'Характеристики',
            },
            {
                path: '/#faq',
                value: 'Ответы на вопросы',
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
                path: '/info#books',
                value: 'Библиотека',
            },
            {
                path: '/info#laws',
                value: 'Законодательство',
            },
        ]
    },
    {
        parent: {
            path: '/about-us',
            value: 'О нас',
        },
        childs: [
            {
                path: '/about-us#history',
                value: 'О компании',
            },
            {
                path: '/about-us#articles',
                value: 'Статьи на интернет-ресурсах',
            },
            {
                path: '/about-us#videos',
                value: 'Видео',
            },
            {
                path: '/about-us#team',
                value: 'Наша команда',
            },
        ]
    },
]