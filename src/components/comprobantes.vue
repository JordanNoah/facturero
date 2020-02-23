<template>
    <v-container fluid fill-height class="py-0">
        <v-tabs grow>
            <v-tab :to="{ name:'facturas' }">Facturas</v-tab>
            <v-tab :to="{ name:'retenciones'}">Retenciones</v-tab> 
            <v-tab :to="{ name:'notaCredito'}">Notas de crédito</v-tab>
            <v-tab :to="{ name:'notaDebito'}">Notas de débito</v-tab>
            <v-tab :to="{ name:'guiaRemision'}">Guías de remisión</v-tab>
            <v-tab :to="{ name:'liquidacionCompra'}">Liquidación de compras</v-tab>
            <v-tab :to="{ name:'proformas'}">Proformas</v-tab>
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