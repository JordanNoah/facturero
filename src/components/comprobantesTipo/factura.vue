<template>
    <v-container fluid fill-height class="pa-0">
        <v-row no-gutters class="fill-height">
            <v-col cols="12">
                <v-card outlined class="">
                    <v-container fill-height fluid class="pa-0">
                        <v-row no-gutters class="fill-height">
                            <v-col cols="2">
                                <v-card class="fill-height" outlined>
                                    <v-card-text class="px-0">
                                        <div class="px-3 pb-4"><v-btn outlined block>Nueva Factura</v-btn></div>
                                        <v-divider></v-divider>
                                        <v-list-item-group color="primary" class="mt-3">
                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-badge content="6" color="primary">
                                                        <v-icon>fas fa-check-double</v-icon>
                                                    </v-badge>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Autorizadas</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-badge content="6" color="primary">
                                                        <v-icon>fas fa-edit</v-icon>
                                                    </v-badge>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Borrador</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-badge content="6" color="primary">
                                                        <v-icon>
                                                            fas fa-inbox
                                                        </v-icon>
                                                    </v-badge>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        Bandeja de salida
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="10">
                                <v-card class="fill-height" outlined>
                                    <v-card-text>
                                        <v-container fill-height fluid class="pa-0">
                                            <v-row no-gutters>
                                                <v-col class="d-flex justify-end">
                                                    <v-btn outlined class="mr-3"> <i class="fas fa-edit mr-2"></i> Guardar borrador</v-btn>
                                                    <v-btn outlined> <i class="fas fa-rocket mr-2"></i> Autorizar comprobante</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-card outlined>
                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col cols="5" class="px-1">
                                                                        <v-card outlined class="noborder">
                                                                            <v-card-text class="pa-0 d-flex justify-center">
                                                                                <v-img src="@/assets/logo.jpg" max-width="300px" contain></v-img>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                        <v-card outlined>
                                                                            <v-card-text>
                                                                                <p class="ma-0 font-weight-bold">SIBERIANCOM S.A.</p>
                                                                                <p class="ma-0 font-weight-bold">SIBERIAN</p>
                                                                                <p class="ma-0"><span class="font-weight-bold">Dir. Matriz:</span>GUAYAS / GUAYAQUIL / ROCAFUERTE / AV. QUITO 939 Y VELEZ</p>
                                                                                <p class="ma-0"> <span class="font-weight-bold">Dir. Sucursal:</span> GUAYAS / GUAYAQUIL / ROCAFUERTE / AV. QUITO 939 Y VELEZ</p>
                                                                                <p class="ma-0"> <span class="font-weight-bold">Obligado a llevar contabilidad:</span> SI</p>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                    <v-col cols="7" class="px-1">
                                                                        <v-card outlined class="fill-height">
                                                                            <v-card-text>
                                                                                <p class="ma-2 title font-weight-bold">RUC:0992893257001</p>
                                                                                <p class="ma-2 headline font-weight-black">FACTURA</p>
                                                                                <p class="ma-2 title font-weight-bold">No.001-050-000005849</p>
                                                                                <p class="ma-2"><span class="font-weight-bold">Ambiente:</span> PRUEBAS</p>
                                                                                <p class="ma-2"><span class="font-weight-bold">Emisión:</span> NORMAL</p>
                                                                                <p class="ma-2 font-weight-bold">Clave de acceso:</p>
                                                                                <v-row no-gutters>
                                                                                    <v-col cols="12" class="d-flex">
                                                                                        <svg id="barcode" :jsbarcode-format="barcodeFormat" :jsbarcode-value="barcodeValue" jsbarcode-textmargin="0" jsbarcode-height="40" jsbarcode-width="1" jsbarcode-fontSize="1" jsbarcode-fontoptions="bold"></svg>
                                                                                    </v-col>
                                                                                </v-row>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                    <v-col cols="12" class="px-1">
                                                                        <v-card outlined>
                                                                            <v-card-text>
                                                                                <v-container>
                                                                                    <v-row no-gutters>
                                                                                        <v-col cols="7" class="mr-auto">
                                                                                            <v-container class="pa-0">
                                                                                                <v-row no-gutters>
                                                                                                    <v-col cols="12">
                                                                                                        <v-text-field  outlined dense label="Razón Social/Nombre"></v-text-field>
                                                                                                    </v-col>
                                                                                                    <v-col cols="5" class="mr-auto">
                                                                                                        <v-text-field outlined dense label="Fecha de emisión"></v-text-field>
                                                                                                    </v-col>
                                                                                                    <v-col cols="6">
                                                                                                        <v-text-field outlined dense v-mask="mask" label="Guía de remisión" placeholder="000-000-000000000"></v-text-field>
                                                                                                    </v-col>
                                                                                                </v-row>
                                                                                            </v-container>
                                                                                        </v-col>
                                                                                        <v-col cols="4">
                                                                                            <v-container class="pa-0">
                                                                                                <v-row no-gutters>
                                                                                                    <v-col cols="12">
                                                                                                        <v-text-field outlined dense label="Ruc/C.I"></v-text-field>
                                                                                                    </v-col>
                                                                                                    <v-col cols="12">
                                                                                                        <v-select outlined dense label="Tipo de identificación"></v-select>
                                                                                                    </v-col>
                                                                                                </v-row>
                                                                                            </v-container>
                                                                                        </v-col>
                                                                                    </v-row>
                                                                                </v-container>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                    <v-col cols="12" class="px-1">
                                                                        <v-card outlined>
                                                                            <v-card-text class="px-2">
                                                                                <v-container class="pa-0">
                                                                                    <v-row no-gutters>
                                                                                        <v-col cols="12" class="px-5">
                                                                                            <v-row no-gutters>
                                                                                                <v-col cols="2"><p class="text-center ma-0">Codigó</p></v-col>
                                                                                                <v-col cols="1"><p class="text-center ma-0">Cantidad</p></v-col>
                                                                                                <v-col cols="2"><p class="text-center ma-0">Descripción</p></v-col>
                                                                                                <v-col cols="1"><p class="text-center ma-0">IVA</p></v-col>
                                                                                                <v-col cols="2"><p class="text-center ma-0">ICE</p></v-col>
                                                                                                <v-col cols="1"><p class="text-center ma-0">Unitario</p></v-col>
                                                                                                <v-col cols="2"><p class="text-center ma-0">Descuento</p></v-col>
                                                                                                <v-col cols="1"><p class="text-center ma-0">Precio Total</p></v-col>
                                                                                            </v-row>
                                                                                        </v-col>
                                                                                        <v-col cols="12">
                                                                                            <draggable tag="ul" :list="listProducts" class="list-group" handle=".handle">
                                                                                                <li class="list-group-item">
                                                                                                    <v-row no-gutters>
                                                                                                        <div class="d-flex align-center">
                                                                                                            <v-btn icon class="handle" x-small>
                                                                                                                <i class="fas fa-arrows-alt-v"></i>
                                                                                                            </v-btn>
                                                                                                        </div>
                                                                                                        <v-col>
                                                                                                            <v-row no-gutters>
                                                                                                                <v-col cols="2" class="pr-1">
                                                                                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                </v-col>
                                                                                                                <v-col cols="1" class="pr-1">
                                                                                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                </v-col>
                                                                                                                <v-col cols="2" class="pr-1">
                                                                                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                </v-col>
                                                                                                                <v-col cols="1" class="pr-1">
                                                                                                                    <v-select outlined dense hide-details></v-select>
                                                                                                                </v-col>
                                                                                                                <v-col cols="2" class="pr-1">
                                                                                                                    <v-row no-gutters>
                                                                                                                        <v-col cols="6">
                                                                                                                            <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                        </v-col>
                                                                                                                        <v-col cols="6">
                                                                                                                            <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                        </v-col>
                                                                                                                    </v-row>
                                                                                                                </v-col>
                                                                                                                <v-col cols="1" class="pr-1">
                                                                                                                    <v-text-field outlined dense hide-details label="Unitario"></v-text-field>
                                                                                                                </v-col>
                                                                                                                <v-col cols="2" class="pr-1">
                                                                                                                    <v-row no-gutters>
                                                                                                                        <v-col cols="6">
                                                                                                                            <v-select outlined dense hide-details></v-select>
                                                                                                                        </v-col>
                                                                                                                        <v-col cols="6">
                                                                                                                            <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                        </v-col>
                                                                                                                    </v-row>
                                                                                                                </v-col>
                                                                                                                <v-col cols="1" class="pr-1">
                                                                                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                                                                                </v-col>
                                                                                                            </v-row>
                                                                                                        </v-col>
                                                                                                        <div class="d-flex align-center">
                                                                                                            <v-btn icon class="close" x-small>
                                                                                                                <i class="fa fa-times" @click="removeAt(idx)"></i>
                                                                                                            </v-btn>
                                                                                                        </div>
                                                                                                    </v-row>
                                                                                                </li>
                                                                                            </draggable>
                                                                                        </v-col>
                                                                                        <v-col cols="12" class="ma-5">
                                                                                            <v-btn outlined>+ Añadir</v-btn>
                                                                                        </v-col>
                                                                                    </v-row>
                                                                                </v-container>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                    <v-col cols="12" class="px-1">
                                                                        <v-card outlined>
                                                                            <v-card-text>
                                                                                <v-row class="">
                                                                                    <v-col cols="6">
                                                                                        <v-card outlined>
                                                                                            <v-row class="d-flex justify-center">
                                                                                                <v-col cols="9">
                                                                                                    <v-text-field outlined hide-details prepend-icon="fas fa-home" dense label="Dirección"></v-text-field>
                                                                                                </v-col>
                                                                                                <v-col cols="9">
                                                                                                    <v-text-field outlined hide-details prepend-icon="fas fa-phone" dense label="Teléfono"></v-text-field>
                                                                                                </v-col>
                                                                                                <v-col cols="9">
                                                                                                    <v-text-field outlined hide-details prepend-icon="fas fa-mail-bulk" dense label="Email"></v-text-field>
                                                                                                </v-col>
                                                                                            </v-row>
                                                                                        </v-card>
                                                                                        <v-card outlined class="mt-5">
                                                                                            <v-card-text>
                                                                                                <v-row no-gutters>
                                                                                                    <v-col cols="9">
                                                                                                        <v-switch v-model="formasPago" label="Formas de Pago" value="frPago"></v-switch>
                                                                                                    </v-col>
                                                                                                    <v-col cols="12">
                                                                                                        <v-row no-gutters class="px-5">
                                                                                                            <v-col cols="4">
                                                                                                                <p class="text-center">Forma de pago</p>
                                                                                                            </v-col>
                                                                                                            <v-col cols="2">
                                                                                                                <p class="text-center">Valor</p>
                                                                                                            </v-col>
                                                                                                            <v-col cols="3">
                                                                                                                <p class="text-center">Plazo</p>
                                                                                                            </v-col>
                                                                                                            <v-col cols="3">
                                                                                                                <p class="text-center">Tiempo</p>
                                                                                                            </v-col>
                                                                                                        </v-row>
                                                                                                        <v-row no-gutters>
                                                                                                            <v-col cols="12">
                                                                                                                <draggable class="list-group" tag="ul" :list="listProducts" handle=".handle">
                                                                                                                    <li class="list-group-item">
                                                                                                                        <v-row no-gutters>
                                                                                                                            <div class="d-flex align-center">
                                                                                                                                <v-btn icon class="handle" x-small><i class="fas fa-arrows-alt-v"></i></v-btn>
                                                                                                                            </div>
                                                                                                                            <v-col>
                                                                                                                                <v-row no-gutters>
                                                                                                                                    <v-col cols="4" class="pr-1"><v-select outlined dense hide-details></v-select></v-col>
                                                                                                                                    <v-col cols="2" class="pr-1"><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                                    <v-col cols="3" class="pr-1"><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                                    <v-col cols="3"><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                                </v-row>
                                                                                                                            </v-col>
                                                                                                                            <div class="d-flex align-center">
                                                                                                                                <v-btn icon class="close" x-small><i class="fa fa-times" @click="removeAt(idx)"></i></v-btn>
                                                                                                                            </div>
                                                                                                                        </v-row>
                                                                                                                    </li>
                                                                                                                </draggable>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="ma-5">
                                                                                                                <v-btn outlined @click="add">+ Añadir</v-btn>
                                                                                                            </v-col>
                                                                                                        </v-row>
                                                                                                    </v-col>
                                                                                                </v-row>
                                                                                            </v-card-text>
                                                                                        </v-card>
                                                                                    </v-col>
                                                                                    <v-col cols="6">
                                                                                        <v-card outlined>
                                                                                            <v-row no-gutters>
                                                                                                <v-col cols="12">
                                                                                                    <v-card-text>
                                                                                                        <v-row no-gutters>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Sub.total 12%</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Sub.total 0%</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Sub.total No Objeto de IVA</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Sub.total Extento de IVA</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Sub.total SIN IMPUESTO</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">Total Descuento</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">ICE</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">IVA 12%</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">IRBPNR</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">PROPINA 10%</p><v-checkbox value dense hide-details class="mx-0 my-0"></v-checkbox></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                            <v-col cols="12" class="d-flex pb-1">
                                                                                                                <v-row no-gutters>
                                                                                                                    <v-col class="d-flex align-center"><p class="mr-4 my-auto">VALOR TOTAL</p></v-col>
                                                                                                                    <v-col><v-text-field outlined dense hide-details></v-text-field></v-col>
                                                                                                                </v-row>
                                                                                                            </v-col>
                                                                                                        </v-row>
                                                                                                    </v-card-text>
                                                                                                </v-col>
                                                                                            </v-row>
                                                                                        </v-card>
                                                                                    </v-col>
                                                                                </v-row>
                                                                            </v-card-text>
                                                                        </v-card>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import { mask } from 'vue-the-mask'
    import draggable from 'vuedraggable'
    import JsBarcode from 'jsbarcode'
    import Canvas from 'canvas'

    export default {
    directives: {
        mask
    },
    components:{
        draggable
    },
    data: () => ({
        mask: '###-###-#########',
        listProducts: [],
        formasPago:false,
        barcodeValue:"2202202001099289325700110010500000059011234567815",
        barcodeFormat:"CODE128A"
    }),
    methods:{
        add: function() {
            this.listProducts.push({});
        },
        barcode:function() {
            JsBarcode("#barcode").init();
            JsBarcode(Canvas);
        }
    },
    mounted(){
        this.barcode()
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
        padding: 0px!important;
    }
</style>