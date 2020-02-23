<template>
    <v-container>
        <v-tabs grow>
            <v-tab :to="{ name:'establecimiento' }">Establecimiento</v-tab>
            <v-tab :to="{ name:'pos' }">POS</v-tab>
            <v-tab :to="{ name:'roles' }">Roles</v-tab>
        </v-tabs>
        <router-view></router-view>
    </v-container>
</template>