<template><v-card class="">
      <v-app-bar
        absolute
        color="#43a047"
        dark
        prominent
        src="https://cms.polypal.com/uploads/2020/06/como-elegir-taquillas-escolares.jpg"
        fade-img-on-scroll
         
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-app-bar-title>{{Title}}</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
        
    </v-card>
</template>

<script>
  export default {
    name: 'HeaderCon',
    data: () => ({
      
      Title:"LockerRent",
    }),
  }
</script>
