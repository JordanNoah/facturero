<template>
    <div>
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
    </div>
</template>
<script>
export default {
    data () {
        return {
            search: '',
            headers: [
                {text:'N°',value:'fecha'},
                {text:'Fecha y hora de creacion',value:'identificacion'},
                {text:'Transacciones',value:'nombre'},
                {text:'Opciones',value:'action'}
            ],
            clientes: [
                {
                    fecha:'20/14/2019',
                    identificacion:'0123456789',
                    nombre:'Jordan Josue',
                    correo:'jordanubilla@hotmail.com',
                    tipo:'normal'
                }
            ],
        }
    }
}
</script>