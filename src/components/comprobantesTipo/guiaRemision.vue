<template>
    <v-container fluid fill-height class="pa-0">
        <v-row no-gutters class="fill-height">
            <v-col cols="12">
                <v-card outlined class="fill-height">
                    <v-container fill-height fluid class="pa-0">
                        <v-row no-gutters class="fill-height">
                            <v-col cols="2">
                                <v-card class="fill-height" outlined>
                                    <v-card-text class="px-0">
                                        <div class="px-3 pb-4"><v-btn outlined block>Guía de remisión</v-btn></div>
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
                                <v-card class="fill-height" outlined>a</v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>