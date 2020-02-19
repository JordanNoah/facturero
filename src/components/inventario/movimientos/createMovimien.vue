<template>
    <v-container fluid>
        <v-card outlined>
            <v-row class="pa-4">
                <v-col class="d-flex" cols="6">
                    <p class="mb-0 mr-4 d-flex align-center">Fecha:</p>
                    <v-text-field outlined dense hide-details></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="6">
                    <p class="mb-0 mr-4 d-flex align-center">Tipo:</p>
                    <v-select v-model="tipoMovimiento" :items="tipo" item-text="abbr" item-value="value" :label='(this.tipoMovimiento==null)?("seleccione"):("seleccionado")' outlined dense hide-details></v-select>
                </v-col>
                <v-col class="d-flex" cols="6">
                    <p class="mb-0 mr-4 d-flex align-center">Establecimiento:</p>
                    <v-select outlined dense hide-details></v-select>
                </v-col>
                <v-col class="d-flex" cols="6">
                    <p class="mb-0 mr-4 d-flex align-center">Bodega:</p>
                    <v-select outlined dense hide-details></v-select>
                </v-col>
                <v-col class="d-flex" cols="6" v-if="this.tipoMovimiento!='3'">
                    <p class="mb-0 mr-4 d-flex align-center">N° Factura:</p>
                    <v-text-field v-mask="mask" placeholder="000-000-000000000" outlined dense hide-details></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="6" v-if="tipoMovimiento=='3'">
                    <p class="mb-0 mr-4 d-flex align-center">Bodega destino:</p>
                    <v-select outlined dense hide-details></v-select>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <p class="mb-0 mr-4 d-flex align-center">Descripción:</p>
                    <v-textarea outlined dense hide-details></v-textarea>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" class="pa-0 px-7">
                    <v-row no-gutters>
                        <v-col cols="2" class="pa-1 d-flex justify-center">Codigo</v-col>
                        <v-col cols="3" class="pa-1 d-flex justify-center">Descripción</v-col>
                        <v-col cols="2" class="pa-1 d-flex justify-center">Cantidad</v-col>
                        <v-col cols="2" class="pa-1 d-flex justify-center">Costo unitario</v-col>
                        <v-col cols="2" class="pa-1 d-flex justify-center">Caducidad</v-col>
                        <v-col cols="1" class="pa-1 d-flex justify-center">Lote</v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <draggable tag="ul" :list="listProducts" class="list-group" handle=".handle">
                        <li class="list-group-item" v-for="(element, index) in listProducts" :key="element.id">
                            <v-row no-gutters>
                                <div class="d-flex align-center pr-3">
                                    <v-btn icon class="handle" x-small>
                                        <i class="fas fa-arrows-alt-v"></i>
                                    </v-btn>
                                </div>
                                <v-col>
                                    <v-row>
                                        <v-col cols="2" class="pa-1">
                                            <v-text-field outlined dense hide-details></v-text-field>
                                        </v-col>
                                        <v-col cols="3" class="pa-1">
                                            <v-text-field outlined dense hide-details></v-text-field>
                                        </v-col>
                                        <v-col cols="2" class="pa-1">
                                            <v-text-field outlined dense hide-details></v-text-field>
                                        </v-col>
                                        <v-col cols="2" class="pa-1">
                                            <v-text-field outlined dense hide-details :disabled='(tipoMovimiento=="3")?(true):(tipoMovimiento=="2")?(true):(false)'></v-text-field>
                                        </v-col>
                                        <v-col cols="2" class="pa-1">
                                            <v-text-field outlined dense hide-details :disabled='(tipoMovimiento=="3")?(true):(tipoMovimiento=="2")?(true):(false)'></v-text-field>
                                        </v-col>
                                        <v-col cols="1" class="pa-1">
                                            <v-text-field outlined dense hide-details></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <div class="d-flex align-center pa-3">
                                    <v-btn icon class="close" x-small @click="removeAt(index)">
                                        <i class="fa fa-times"></i>
                                    </v-btn>
                                </div>
                            </v-row>
                        </li>
                    </draggable>
                </v-col>
                <v-col cols="12" class="px-9 py-2 d-flex justify-end">
                    <v-btn outlined @click="add" color="primary">+ Añadir</v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-end">
                <v-btn depressed color="primary">Borrador</v-btn>
                <v-btn depressed color="success">Guardar</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import { mask } from 'vue-the-mask'
import draggable from 'vuedraggable'
export default {
    directives:{
        mask
    },
    components:{
        draggable
    },
    data: function() {
        return {
            id:0,
            listProducts:[{id:this.id}],
            mask:'###-###-#########',
            tipo:[
                {value: '1', abbr: 'Ingreso'},
                {value: '2', abbr: 'Egreso'},
                {value: '3', abbr: 'Traslado'}
            ],
            tipoMovimiento:null
        }
    },
    methods:{
        removeAt(idx) {
            if(this.listProducts.length>1){this.listProducts.splice(idx, 1)}
        },
        add: function() {
            this.id = this.id+1
            this.listProducts.push({id:this.id})
        }
    }
}
</script>
<style scoped>
    .noborder{
        border: 0px!important;
    }
    .list-group-item{
        list-style: none;
    }
    .list-group{
        padding-left: 10px;
    }
</style>