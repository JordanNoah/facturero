<template>
    <v-content>
      <v-app-bar color="primary" flat>
          <v-app-bar-nav-icon class="white--text" @click="menuApp=!menuApp"></v-app-bar-nav-icon>
          <v-toolbar-title class="white--text">NOMBRE DE LA EMPRESA</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn text class="white--text">
              <i class="mr-2 fas fa-check-circle"></i>
              Plan empresarial
          </v-btn>

          <v-btn text class="white--text">
              <i class="mr-2 fas fa-file-invoice"></i>
              117 comprobantes
          </v-btn>

          <v-btn icon text @click="$vuetify.theme.dark=!$vuetify.theme.dark">
              <i class="fas fa-moon" :class="($vuetify.theme.dark==false)?('grey--text'):('yellow--text')"></i>
          </v-btn>

          <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn dark depressed fab v-on="on">
                  <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-list>
                <router-link :to="{ name: 'perfil'}">
                  <v-list-item>
                    <v-list-item-title>
                      <i class="fas fa-user-circle"></i>  Mi perfil
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/login">
                  <v-list-item @click.stop="cleanSesion" @click="$vuetify.theme.dark=false">
                    <v-list-item-title>
                      <i class="fas fa-sign-out-alt"></i>  Cerrar session
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
          </v-menu>
      </v-app-bar>
      <v-navigation-drawer absolute temporary v-model="menuApp">
        <v-list>
          <v-list-item-group>
            <router-link to="negocio">
              <v-list-item :to="{name:'negocio'}">
                <v-list-item-icon>
                  <v-icon>fas fa-store-alt</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Mi negocio</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="comprobantes">
              <v-list-item :to="{name:'comprobantes'}">
                <v-list-item-icon>
                  <v-icon>fas fa-file-invoice</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Comprobantes</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="clientes">
              <v-list-item :to="{name:'clientes'}">
                <v-list-item-icon>
                  <v-icon>fas fa-users</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Clientes</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="proveedores">
              <v-list-item :to="{name:'proveedores'}">
                <v-list-item-icon>
                  <v-icon>fas fa-user-tie</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Proveedores</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="cierrex">
              <v-list-item :to="{name:'cierrex'}">
                <v-list-item-icon>
                  <v-icon>far fa-closed-captioning</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Cierres</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="list">
              <v-list-item :to="{name:'list'}">
                <v-list-item-icon>
                  <v-icon>fas fa-boxes</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Inventario</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="resumen">
              <v-list-item :to="{name:'resumen'}">
                <v-list-item-icon>
                  <v-icon>fas fa-poll</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Resumen</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid class="py-0">
        <router-view class="view two"></router-view>
      </v-container>
    </v-content>
</template>
<script>
export default {
  data(){
    return{
      menuApp:null
    }
  }
}
</script>