<template>
    <v-container fluid>
        <v-card outlined>
            <v-card-title>Resumen</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col class="d-flex">
                        <p class="mb-0 d-flex align-center mr-4">Por establecimiento:</p>
                        <v-select outlined dense hide-details></v-select>
                    </v-col>
                    <v-col>
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                            transition="scale-transition" offset-y max-width="290px" min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="dates" label="Fecha" prepend-icon="far fa-calendar-alt" v-on="on"
                                    hide-details outlined dense clearable></v-text-field>
                            </template>
                            <v-date-picker v-model="dates" range></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-space-between">
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="fas fa-file-invoice"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Facturas</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="fas fa-file-contract"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Retenciónes</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="fas fa-file-invoice-dollar"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Notas de crédito</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-space-between">
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="fas fa-file-alt"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Notas de débito</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="far fa-file-alt"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Guias de remisión</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card outlined>
                            <v-row>
                                <v-col cols="3" class="primary white--text d-flex align-center justify-center">
                                    <p class="ma-0 display-2 text-center"><i class="fas fa-file-medical-alt"></i></p>
                                </v-col>
                                <v-col cols="9">
                                    <p class="text-center ma-0 title">82</p>
                                    <p class="text-center ma-0 title">Liquidación de compras</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card outlined>
                            <v-card-title>Detalle ingreso</v-card-title>
                            <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding"
                            :line-width="lineWidth" :stroke-linecap="lineCap" :gradient-direction="gradientDirection"
                            :fill="fill" :type="type" :auto-line-width="autoLineWidth" auto-draw
                            :show-labels="showLabels" :label-size="labelSize"></v-sparkline>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-card outlined>
                            <v-card-title>Detalle Egreso</v-card-title>
                            <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding"
                            :line-width="lineWidth" :stroke-linecap="lineCap" :gradient-direction="gradientDirection"
                            :fill="fill" :type="type" :auto-line-width="autoLineWidth" auto-draw
                            :show-labels="showLabels" :label-size="labelSize"></v-sparkline>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
    data () {
        return{
            menu1:false,
            dates:[],
            //graficos
            showLabels: true,
            lineWidth: 2,
            labelSize: 7,
            radius: 10,
            padding: 8,
            lineCap: 'round',
            gradient: gradients[5],
            value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
            gradientDirection: 'top',
            fill: false,
            type: 'trend',
            autoLineWidth: false
            //
        }
    }
}
</script>