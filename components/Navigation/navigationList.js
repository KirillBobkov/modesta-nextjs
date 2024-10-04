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
                path: '/#products',
                value: 'Продуктовая линейка',
            }, 
            {
                path: '/#faq',
                value: 'Ответы на вопросы',
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
                path: '/info#articles',
                value: 'Статьи',
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
                path: '/about-us#mission',
                value: 'О компании',
            },
            {
                path: '/about-us#social-networks',
                value: 'Интернет-ресурсы',
            },
            {
                path: '/about-us#videos',
                value: 'Видео',
            },
        ]
    },
    {
        parent: {
            path: '/history',
            value: 'История',
        },
        childs: [
            {
                path: '/history#roadmap',
                value: 'Дорожная карта',
            },
            {
                path: '/history#team',
                value: 'Наша команда',
            },
        ]
    },
]