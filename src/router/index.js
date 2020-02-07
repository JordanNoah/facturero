import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Comprobantes from '@/components/comprobantes.vue'
import Factura from '@/components/comprobantesTipo/factura.vue'
import Retenciones from '@/components/comprobantesTipo/retenciones.vue'
import NotaCredito from '@/components/comprobantesTipo/notaCredito.vue'
import NotaDebito from '@/components/comprobantesTipo/notaDebito.vue'
import GuiaRemision from '@/components/comprobantesTipo/guiaRemision.vue'
import liquidacionCompra from '@/components/comprobantesTipo/liquidacionCompra.vue'
import proformas from '@/components/comprobantesTipo/proformas.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Index,
    children : [
      {
        path:'/comprobantes',
        name:'comprobantes',
        component:Comprobantes,
        children:[
          {
            path:'/comprobantes/facturas',
            name:'facturas',
            component:Factura
          },
          {
            path:'/comprobantes/retenciones',
            name:'retenciones',
            component:Retenciones
          },
          {
            path:'/comprobantes/notaDeCredito',
            name:'notaCredito',
            component:NotaCredito
          },
          {
            path:'/comprobantes/notaDeDebito',
            name:'notaDebito',
            component:NotaDebito
          },
          {
            path:'/comprobantes/guiaRemision',
            name:'guiaRemision',
            component:GuiaRemision
          },
          {
            path:'/comprobantes/liquidacionCompra',
            name:'liquidacionCompra',
            component:liquidacionCompra
          },
          {
            path:'/comprobantes/proformas',
            name:'proformas',
            component:proformas
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
