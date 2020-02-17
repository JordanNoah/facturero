<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card outlined>
                    <v-card-title>
                        Medidas unidades
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="fas fa-search" label="Buscar" single-line hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="medidas" :search="search"></v-data-table>
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
          { text: 'Nombre',value: 'name' },
          { text: 'Abreviatura', value: 'calories' }
        ],
        medidas: [
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