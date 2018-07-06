import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueRavenjs(Vue, options) {
    if (options.disable) return
    
    if(!options.dsn) {
        console.error('DSN is must value.')
        return
    }

    Raven
        .config(options.dsn, options.config)
        .addPlugin(RavenVue, Vue)
        .install()

    Vue.prototype.$raven = Raven
}
