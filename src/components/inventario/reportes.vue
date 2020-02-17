<template>
    <v-container fluid>
        <v-card outlined>
            <v-card-title>
                Reportes de invertario
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4" class="d-flex">
                        <p class="mb-0 d-flex align-center mr-5">Establecimiento:</p>
                        <v-select outlined dense hide-details></v-select>
                    </v-col>
                    <v-col cols="4" class="d-flex">
                        <p class="mb-0 d-flex align-center mr-5">Bodega:</p>
                        <v-select outlined dense hide-details></v-select>
                    </v-col>
                    <v-col cols="4" class="d-flex justify-end">
                        <v-menu transition="slide-y-transition" bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" outlined v-on="on">
                                    <i class="fas fa-download mr-2"></i> Descargar
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-icon class="mr-2">fas fa-file-pdf</v-icon>
                                    <v-list-item-title>Pdf</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-icon class="mr-2">fas fa-file-excel</v-icon>
                                    <v-list-item-title>Excel</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="d-flex justify-end">
                            <v-col cols="6">
                                <v-text-field v-model="search" dense append-icon="fas fa-search" label="Buscar"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
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