<template>
    <v-container fill-height fluid class="pa-0">
        <!---->
        <v-dialog v-model="userData" persistent>
            <v-card outlined>
              <v-card-title class="d-flex justify-center pb-0">Añadir proveedor</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="9" class="py-0">
                          <v-card outlined style="border:0px;">
                            <v-card-text class="px-3 py-0">
                              <v-row no-gutters>
                                <v-col cols="7" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Identificación:</p>
                                  <v-select class="mr-4" outlined dense hide-details></v-select>
                                  <v-text-field outlined dense hide-details></v-text-field>
                                  <v-btn icon class="headline ml-3"><i class="fab fa-searchengin"></i></v-btn>
                                </v-col>
                                <v-col cols="12" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Razón social/Nombre:</p>
                                  <v-text-field outlined dense hide-details></v-text-field>
                                </v-col>
                                <v-col cols="12" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Obligado a llevar contabilidad:</p>
                                  <v-select class="mr-4" outlined dense hide-details></v-select>
                                  <p class="my-0 d-flex align-center mr-3">Clase de contribuyente:</p>
                                  <v-select outlined dense hide-details></v-select>
                                </v-col>
                                <v-col cols="12" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Teléfono convencional:</p>
                                  <v-text-field outlined dense hide-details class="mr-4"></v-text-field>
                                  <p class="my-0 d-flex align-center mr-3">Ext:</p>
                                  <v-text-field outlined dense hide-details class="mr-4"></v-text-field>
                                  <p class="my-0 d-flex align-center mr-3">Celular:</p>
                                  <v-text-field outlined dense hide-details></v-text-field>
                                </v-col>    
                                <v-col cols="12" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Email:</p>
                                  <v-text-field outlined dense hide-details></v-text-field>
                                </v-col>
                                <v-col cols="12" class="d-flex my-2">
                                  <p class="my-0 d-flex align-center mr-3">Notas:</p>
                                  <v-textarea outlined dense label="Outlined textarea" hide-details></v-textarea>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col cols="3" class="d-flex align-center">
                            <v-card outlined>
                                <v-card-text>
                                    <v-row>
                                      <v-col cols="12" class="d-flex justify-center">
                                        <v-avatar size="180" v-if="this.imageBase64!=null"><img :src="this.imageBase64" alt="John"></v-avatar>
                                        <v-avatar size="180" v-if="this.imageBase64==null"><span class="headline">36</span></v-avatar>
                                      </v-col>
                                      <v-col>
                                        <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='fas fa-camera-retro' clearable @click:clear="removePhoto"></v-text-field>
                                        <input type="file" style="display:none;" ref="image" accept="image/*" @change="onFileSelected">
                                      </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-action class="d-flex justify-end mb-4">
                  <v-btn outlined color="error" class="mr-2" @click="userData=false">Cancelar</v-btn>
                  <v-btn outlined color="success" class="mx-3">Guardar</v-btn>
                </v-card-action>
            </v-card>
        </v-dialog>
        <!---->
        <v-card outlined width="100%">
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn depressed color="primary" @click="userData=true"> 
                            <i class="fas fa-user-plus mr-2"></i> Añadir nuevo proveedor
                        </v-btn>
                    </v-col>
                    <v-col cols="12" class="pa-0">
                        <v-card outlined style="border:0px">
                            <v-card-title>
                                Proveedores
                                <v-spacer></v-spacer>
                                <v-text-field v-model="search" append-icon="fab fa-searchengin" label="Buscar" single-line hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="headers" :items="proveedores" :search="search">
                              <template v-slot:item.action="{item}">
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on }">
                                    <v-icon color="primary" class="mr-2" dark v-on="on" @click="editar(item)">fas fa-user-edit</v-icon>
                                  </template>
                                  <span>Editar proveedor</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on }">
                                    <v-icon color="primary" dark v-on="on" @click="eliminar(item)">fas fa-user-minus</v-icon>
                                  </template>
                                  <span>Eliminar proveedor</span>
                                </v-tooltip>
                              </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        userData: false,
        imageName:'',
        imageBase64:null,
        headers: [
          {text:'Fecha',value:'fecha'},
          {text:'Identificación',value:'identificacion'},
          {text:'Nombre',value:'nombre'},
          {text:'Correo',value:'correo'},
          {text:'Opciones',value:'action'}
        ],
        proveedores: [
          {fecha:'20/14/2019',
           identificacion:'0123456789',
           nombre:'Jordan Josue',
           correo:'jordanubilla@hotmail.com'
          }
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