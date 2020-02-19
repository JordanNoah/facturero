<template>
    <v-container fluid>
        <!---->
        <v-dialog v-model="action" persistent permanent max-width="500px">
            <v-card>
                <v-card-title class="pb-0">
                    Añadir
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="d-flex" cols="12">
                            <p class="mb-0 d-flex align-center mr-4">Nombre:</p>
                            <v-text-field outlined dense hide-details></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                            <p class="mb-0 d-flex align-center mr-4">Descripción:</p>
                            <v-textarea outlined dense hide-details></v-textarea>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                            <p class="mb-0 d-flex align-center mr-4">Color:</p>
                            <v-color-picker class="ma-2" hide-mode-switch hide-inputs flat></v-color-picker>
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
                <v-btn outlined @click="action=true">Añadir categorias</v-btn>
            </v-col>
        </v-row>
        <v-card outlined>
            <v-card-title>
                Categorías
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
                        <span>Editar categoria</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon color="primary" class="mr-2" dark v-on="on" @click="visualizar(item)">fas fa-book-open</v-icon>
                        </template>
                        <span>Visualizar categoria</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon color="primary" dark v-on="on" @click="eliminar(item)">fas fa-trash</v-icon>
                        </template>
                        <span>Eliminar categoria</span>
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
          { text: 'Descripción', value: 'calories' },
          { text: 'Opciones', value: 'action' }
        ],
        categorias: [
          {
            name: 'Frozen Yogurt',
            calories: 159
          },
          {
            name: 'Ice cream sandwich',
            calories: 237
          },
          {
            name: 'Eclair',
            calories: 262
          },
          {
            name: 'Cupcake',
            calories: 305
          },
          {
            name: 'Gingerbread',
            calories: 356
          },
          {
            name: 'Jelly bean',
            calories: 375
          },
          {
            name: 'Lollipop',
            calories: 392
          },
          {
            name: 'Honeycomb',
            calories: 408
          },
          {
            name: 'Donut',
            calories: 452
          },
          {
            name: 'KitKat',
            calories: 518
          },
        ],
      }
    },
  }
</script>