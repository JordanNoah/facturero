<template>
    <div>
        <!---->
        <v-dialog v-model="productAction" permanent persistent max-width="800">
            <v-card>
                <v-card-title>
                    Agregar Producto
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="7">
                            <v-card outlined>
                                <v-card-text class="py-0">
                                    <v-row no-gutters>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">Código:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">Nombre:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">P.V.P:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-text-field outlined dense hide-details></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">IVA:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-select outlined dense hide-details></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">ICE:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-select outlined dense hide-details></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">Categorias:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-select outlined dense hide-details></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="4" class="d-flex align-center">
                                                    <p class="my-0">Marca:</p>
                                                </v-col>
                                                <v-col cols="8">
                                                    <v-select outlined dense hide-details></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="5" class="d-flex align-center">
                            <v-card outlined>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" class="d-flex justify-center">
                                            <v-avatar size="180" v-if="this.imageBase64!=null"><img :src="this.imageBase64" alt="John"></v-avatar>
                                            <v-avatar size="180" v-if="this.imageBase64==null"><span class="headline">36</span></v-avatar>
                                        </v-col>
                                        <v-col cols="12">
                                                <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='fas fa-camera-retro' clearable @click:clear="removePhoto"></v-text-field>
                                            <input type="file" style="display:none;" ref="image" accept="image/*" @change="onFileSelected">
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                    <v-btn text color="error" @click="productAction=false">Cancelar</v-btn>
                    <v-btn text color="success">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!---->
        <v-container fluid>
            <v-row>
                <v-col cols="6"></v-col>
                <v-col cols="6" class="d-flex justify-end">
                    <v-btn outlined @click="productAction=true">Agregar producto</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card outlined>
                        <v-card-title>
                            Productos
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="fas fa-search" label="Search" single-line
                                hide-details>
                            </v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="desserts" :search="search">
                            <template v-slot:item.action="{item}">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon color="primary" class="mr-2" dark v-on="on" @click="editar(item)">fas
                                            fa-edit</v-icon>
                                    </template>
                                    <span>Editar proveedor</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon color="primary" dark v-on="on" @click="eliminar(item)">fas fa-trash
                                        </v-icon>
                                    </template>
                                    <span>Eliminar proveedor</span>
                                </v-tooltip>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                productAction:null,
                search: '',
                imageBase64:null,
                imageName:'',
                headers: [{
                        text: 'Fecha de creacion',
                        value: 'calories'
                    },
                    {
                        text: 'Código',
                        value: 'calories'
                    },
                    {
                        text: 'Nombre',
                        value: 'fat'
                    },
                    {
                        text: 'Precio',
                        value: 'carbs'
                    },
                    {
                        text: 'Opciones',
                        value: 'action'
                    },
                ],
                desserts: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
            }
        },
        methods:{
            pickFile(){
                this.$refs.image.click ()
            },
            onFileSelected(event) {
            const files = event.target.files
            if (files[0] !== undefined) {
                this.imageName = files[0].name
                if (this.imageName.lastIndexOf('.') <= 0) {
                return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                this.imageUrl = fr.result
                this.imageFile = files[0] // this is an image file that can be sent to server...
                })
                fr.onload = e =>{
                this.imageBase64=e.target.result
                }
            } else {
                this.imageName = ''
                this.imageFile = ''
                this.imageUrl = ''
            }
            },
            removePhoto(){
            this.imageName = ''
            this.imageFile = ''
            this.imageUrl = ''
            this.imageBase64 = null
            }
        }
    }
</script>