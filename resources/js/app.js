
import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
// import { ZiggyVue } from 'ziggy-js'
import ElemenPlus from 'element-plus'
import 'element-plus/dist/index.css'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin}) {
        createApp({ render: () => h(App, props)})
            .use(plugin)
            // .use(ZiggyVue)
            .use(ElemenPlus, {size: 'small'})
            .mixin({ methods: { appRoute: route }})
            .mount(el)
    }
})