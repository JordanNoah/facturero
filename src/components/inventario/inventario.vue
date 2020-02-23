<template>
    <v-container fluid>
        <v-row>
            <v-col class="mx-2">
                <v-row>
                    <p class="ma-0 d-flex align-center">Elegir Establecimiento:</p>
                    <v-col>
                        <v-select dense outlined hide-details></v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="mx-2">
                <v-row>
                    <p class="ma-0 d-flex align-center">Elegir bodega</p>
                    <v-col>
                        <v-select dense outlined hide-details></v-select>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on" depressed>
                            Opciones
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>Imprimir</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Descargar Excel</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Descargar Pdf</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Listar solo por debajo del mínimo</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
            <v-col cols="12">
                <v-card outlined>
                    <v-card-title>
                        Inventario
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="fas fa-search" label="Buscar" single-line hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Codigo producto', value: 'name' },
          { text: 'Nombre producto', value: 'calories' },
          { text: 'Costo unitario', value: 'fat' },
          { text: 'Cantidad', value: 'carbs' },
          { text: 'Caducidad', value: 'protein' },
          { text: 'P.V.P', value: 'iron' },
          { text: 'Lote', value: 'iron' }
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