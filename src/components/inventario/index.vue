<template>
    <v-container fluid>
        <v-tabs grow>
            <v-tab>Inventario</v-tab>
            <v-tab>Productos</v-tab>
            <v-tab>Movimientos</v-tab>
            <v-tab>Reportes</v-tab>
            <v-tab>Unidades</v-tab>
            <v-tab>Categorías</v-tab>
            <v-tab>Variable Productos</v-tab>
            <v-tab>Bodegas</v-tab>
        </v-tabs>
        <router-view></router-view>
    </v-container>
</template>