<template>
    <v-container fluid fill-height class="py-0">
        <v-tabs grow>
            <v-tab to="facturas">Facturas</v-tab>
            <v-tab to="retenciones">Retenciones</v-tab> 
            <v-tab to="notaDeCredito">Notas de crédito</v-tab>
            <v-tab to="notaDeDebito">Notas de débito</v-tab>
            <v-tab to="guiaRemision">Guías de remisión</v-tab>
            <v-tab to="liquidacionCompra">Liquidación de compras</v-tab>
            <v-tab to="proformas">Proformas</v-tab>
        </v-tabs>
        <v-container fluid fill-height class="pa-0">
            <router-view class="view three"></router-view>
        </v-container>
    </v-container>
</template>
<script>
export default {
    
}
</script>