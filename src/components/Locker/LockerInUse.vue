<template>
    <v-card class="pa-5">
        <section id="sectionId">
            <v-card-title class="text-center-component">
                <v-card-text align="Center">Locker Numero: {{ data.IdLocker }}</v-card-text>
            </v-card-title>
        </section>

        <section align="center">
            <v-icon size="150px" :color="getColor(data.IdEstadoPuerta)">
                mdi-alpha-r-box-outline
            </v-icon>
            <br>
            <v-btn small color="primary" @click="OpeningDoor(data.IdLocker)">
                Open door!
            </v-btn>

        </section>
    </v-card>
</template>


<script>
/*import { OpenDoor} from '../services/Locker';*/


export default {
    name: "LockerInUse",
    emits:['OpenDoorEvent'],


    props: {
        data: {},
    },

    methods: {

        getColor: (IdEstadoPuerta) => {
            if (IdEstadoPuerta === 'Open') { return 'green darken-2' }
            else if (IdEstadoPuerta === 'Close') { return 'red darken-2' }
        },
        OpeningDoor(er){
            
            this.$emit('OpenDoorEvent', er);
            console.log('Abirendo la Puerta Numero:  ' + '"'+er+ '"');
            
        },
    }

};
</script>

<style scoped>
.text-center-component {
    display: flow-root
}
</style>
