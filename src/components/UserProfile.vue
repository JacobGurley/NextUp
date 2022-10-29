<template>
   
    <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        allign="left"
        > 
        User Name Here</h1>
    <div id="app">
        <v-app id="inspire">
          <v-row
            align="left"
          >
            <v-btn depressed>
              Edit Profile
            </v-btn>
          </v-row>
        </v-app>
      </div>
    </form>
</template>

<script>

export default {
    name: "profile-display"
}
</script>

<style scoped>

</style>