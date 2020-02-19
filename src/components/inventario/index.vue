<template>
    <v-container fluid>
        <v-tabs grow>
            <v-tab :to="{ name: 'list' }">Inventario</v-tab>
            <v-tab :to="{ name: 'productos' }">Productos</v-tab>
            <v-tab :to="{ name: 'movimList' }">Movimientos</v-tab>
            <v-tab :to="{ name: 'reportes' }">Reportes</v-tab>
            <v-tab :to="{ name: 'unidades'}">Unidades</v-tab>
            <v-tab :to="{ name: 'categorias'}">Categorías</v-tab>
            <v-tab :to="{ name: 'marcas'}">Marcas</v-tab>
            <v-tab :to="{ name: 'bodegas'}">Bodegas</v-tab>
        </v-tabs>
        <router-view></router-view>
    </v-container>
</template>