<template>
    <v-container fluid>
        <!---->
        <v-dialog v-model="action" permanent persistent max-width="400px">
            <v-card>
                <v-card-title>
                    Añadir
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="d-flex">
                            <p class="mb-0 d-flex align-center mr-4">Marca:</p>
                            <v-text-field outlined dense hide-details></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                    <v-btn outlined color="error" @click="action=false">Cancelar</v-btn>
                    <v-btn outlined color="success">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!---->
        <v-row>
            <v-col class="d-flex justify-end">
                <v-btn outlined @click="action=true">Añadir marca</v-btn>
            </v-col>
        </v-row>
        <v-card outlined>
            <v-card-title>
                Marcas
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="fas fa-search" label="Buscar" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="categorias" :search="search">
                <template v-slot:item.action="{item}">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon color="primary" class="mr-2" dark v-on="on" @click="editar(item)">far fa-edit</v-icon>
                        </template>
                        <span>Editar marcas</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon color="primary" dark v-on="on" @click="eliminar(item)">fas fa-trash</v-icon>
                        </template>
                        <span>Eliminar marcas</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        action:null,
        headers: [
          { text: 'Nombre',value: 'name' },
          { text: 'Opciones', value: 'action' }
        ],
        categorias: [
          {
            name: 'Frozen Yogurt'
          },
          {
            name: 'Ice cream sandwich'
          },
          {
            name: 'Eclair'
          },
          {
            name: 'Cupcake'
          },
          {
            name: 'Gingerbread'
          },
          {
            name: 'Jelly bean'
          },
          {
            name: 'Lollipop'
          },
          {
            name: 'Honeycomb'
          },
          {
            name: 'Donut'
          },
          {
            name: 'KitKat'
          },
        ],
      }
    },
  }
</script>