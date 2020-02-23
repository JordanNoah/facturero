<template>
    <v-container>
        <v-data-table :headers="headers" :items="clientes" :search="search">
            <template v-slot:item.action="{item}">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon color="primary" class="mr-2" dark v-on="on" @click="pdf(item)">fas fa-book-reader</v-icon>
                    </template>
                    <span>Ver cierre</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            search: '',
            headers: [
                {text:'N°',value:'numero'},
                {text:'Fecha y hora de creacion',value:'fechaHora'},
                {text:'Transacciones',value:'transacciones'},
                {text:'Opciones',value:'action'}
            ],
            clientes: [
                {
                    numero:'1',
                    fechaHora:'20/10/2019',
                    transacciones:'$200.50'
                }
            ],
        }
    }
}
</script>