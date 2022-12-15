<template> 
    <div>
        <input
            class="box-border rounded-md w-52 mt-5" 
            type="text" 
            placeholder="Search Games" 
            v-model="searchInput"
        />
        <div
            class="box-border rounded-md bg-stone-600 shadow-lg justify-center align-center mt-4 ml-96 mr-96 hover: scale-110" 
            v-for="game in searchResult" 
            : key=" game. room"
        >
            <div class="flex align-center justify-center">
                <img
                    class="w-16 h-16 mr-10 mt-2"
                    src="https://cdn-icons-png.flaticon.com/512/889/889455.png"
                />
                <div class="flex-col text-white"> 
                    <h1>Room Name: {{ game. room }}</h1> 
                    <p>Sport: {{ game. sport }}</p> 
                    <p>Location: {{ game. location }}</p>
                    <p>Number of Players: {{ game. numberofplayers }}</p> 
                    <p>List of Players: {{game.playerlist}}</p>
                    <button class="text-green-600">Join Game</button>
                </div> 
            </div> 
        </div>
    </div> 
</template>

<script>
// need to import searching functionality here

import { defineComponent } from '@vue/composition-api'
import { on } from 'events';

export default defineComponent({
    setup() {
        
    },
})

methods : {
    joinGame(){
        game.playerlist.add(userCredential.user)
    }
    alert("Successfully joined the game! Enjoy!");
        router.push("/user");
};

</script>
