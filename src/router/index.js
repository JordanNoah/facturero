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
import clientes from '@/components/clientes/list.vue'
import proveedores from '@/components/proveedores/list.vue'
import cierres from '@/components/cierres/index.vue'
import cierresx from '@/components/cierres/listx.vue'
import cierresz from '@/components/cierres/listz.vue'
import inventario from '@/components/inventario/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
    children : [
      {
        path:'/comprobantes/',
        name:'comprobantes',
        component:Comprobantes,
        children:[
          {
            path:'/facturas',
            name:'facturas',
            component:Factura
          },
          {
            path:'/retenciones',
            name:'retenciones',
            component:Retenciones
          },
          {
            path:'/notaDeCredito',
            name:'notaCredito',
            component:NotaCredito
          },
          {
            path:'/notaDeDebito',
            name:'notaDebito',
            component:NotaDebito
          },
          {
            path:'/guiaRemision',
            name:'guiaRemision',
            component:GuiaRemision
          },
          {
            path:'/liquidacionCompra',
            name:'liquidacionCompra',
            component:liquidacionCompra
          },
          {
            path:'/proformas',
            name:'proformas',
            component:proformas
          }
        ]
      },
      {
        path:'/clientes',
        name:'clientes',
        component:clientes
      },
      {
        path:'/proveedores',
        name:'proveedores',
        component:proveedores
      },
      {
        path:'/cierres',
        name:'cierres',
        component:cierres,
        children:[
          {
            path:'/cierres/x',
            name:'cierrex',
            component:cierresx
          },
          {
            path:'/cierres/z',
            name:'cierrez',
            component:cierresz
          }
        ]
      },
      {
        path:'/inventario',
        name:'inventario',
        component:inventario
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
