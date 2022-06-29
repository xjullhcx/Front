<template>

    <v-container>
        <h1 v-if="loading" class="Load">Cargando...</h1>
        <ul v-else>
            <v-row no-gutters>
                <v-col v-for="locker in Lockers" :key="locker.id" :cols="4">
                    <LockerInUse :data="locker" @OpenDoorEvent="OpenDoorEvent" />


                </v-col>
            </v-row>
        </ul>
    </v-container>

</template>

<script>
import LockerInUse from './Locker/LockerInUse';
import { getLocker, OpenDoor } from '../services/Locker';




export default {
    name: "MainCon",

    data: () => ({
        Lockers: [],
        loading: true,

    }),
    methods: {
        OpenDoorEvent(IdLocker) {
            console.log("hola soy el padre escuchando " + IdLocker);
            OpenDoor( );
        }

    },


    components: {
        LockerInUse
    },
    mounted() {
        getLocker().then((response) => {
            this.Lockers = response;
            this.loading = false;
            console.log("hola");
        });
    },


}

</script>

<style>
.Load {
    text-align: center;
    text-transform: uppercase;
    color: rgb(203, 115, 52);


}
</style>