<template>
    <v-container class="pa-0">
        <v-dialog v-model="action" persistent permanent max-width="1000px">
            <v-card>
                <v-card-title>
                    Registrar
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Establecimientos :</p>
                                </v-col>
                                <v-col>
                                    <v-select name="name" outlined dense hide-details clearable></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Nombre:</p>
                                </v-col>
                                <v-col>
                                    <v-text-field name="name" outlined dense hide-details clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">N° Establecimiento:</p>
                                </v-col>
                                <v-col>
                                    <v-text-field name="name" outlined dense hide-details clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">N° punto emisión:</p>
                                </v-col>
                                <v-col>
                                    <v-text-field name="name" outlined dense hide-details clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Secuencial:</p>
                                </v-col>
                                <v-col>
                                    <v-text-field name="name" outlined dense hide-details clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Bodega asignada:</p>
                                </v-col>
                                <v-col>
                                    <v-select name="name" outlined dense hide-details clearable></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Contraseña:</p>
                                </v-col>
                                <v-col>
                                    <v-text-field name="name" outlined dense hide-details clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Tipo:</p>
                                </v-col>
                                <v-col>
                                    <v-select name="name" outlined dense hide-details clearable></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">¿Permitir facturar sin inventario?:</p>
                                </v-col>
                                <v-col>
                                    <v-select name="name" outlined dense hide-details clearable></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row class="d-flex align-center" no-gutters>
                                <v-col cols="6">
                                    <p class="mb-0 mr-3">Sistema de resta inventario:</p>
                                </v-col>
                                <v-col>
                                    <v-select name="name" outlined dense hide-details clearable></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                    <v-btn outlined color="error" @click="action=false">Cancelar</v-btn>
                    <v-btn outlined color="success">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card outlined>
            <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-end pa-3">
                    <v-btn outlined @click="action=true">Añadir</v-btn>
                </v-col>
                <v-col>
                    <v-row class="d-flex justify-end px-9">
                        <v-col cols="6">
                            <v-text-field v-model="search" append-icon="fas fa-search" label="Search" single-line
                                hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-data-table :headers="headers" :items="desserts" :search="search">
                        <template v-slot:item.action="{item}">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon color="primary" class="mr-2" dark v-on="on" @click="editar(item)">far
                                        fa-edit</v-icon>
                                </template>
                                <span>Editar POS</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon color="primary" dark v-on="on" @click="eliminar(item)">fas fa-trash</v-icon>
                                </template>
                                <span>Eliminar POS</span>
                            </v-tooltip>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        action:false,
        headers: [
          { text: 'ID', value: 'name' },
          { text: 'Password', value: 'calories' },
          { text: 'Establecimiento', value: 'fat' },
          { text: 'Estado', value: 'carbs' },
          { text: 'Bodega', value: 'protein' },
          { text: 'Opciones', value: 'action' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>