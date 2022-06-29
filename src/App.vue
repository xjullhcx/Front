<template>
  <v-app>
    <HeaderCon/>
    <v-main>
      <MainCon/>
    </v-main>
    <FooterCon /> 
  </v-app>
</template>

<script>
import FooterCon from "./components/Footer"; 
import  HeaderCon from "./components/Header";
import MainCon from "./components/Main";


export default {
  name: "App",
  data: () => ({
  }),
  components: {
    FooterCon,
    HeaderCon,
    MainCon
     
 }
};
</script>