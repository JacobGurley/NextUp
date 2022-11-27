<!--This creates a form that allows users to type. It also links to firebase.-->
<template>
    <div class="w-full max-w-xs">
      <form class="bg-neutral-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-white mb-5 font-bold text-xl">Location Review</h1>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="locationName">
            Location Name
          </label>
          <input
            v-model="locationName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="locationname"
            type="text"
          />
        </div>
        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="comments">
            Comments
          </label>
          <input
            v-model="comments"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="comments"
            type="text"
          />
        </div>
        <div class="star-rating">
            <star-rating :rating="rating" :star-style="starStyle"></star-rating>
        </div>
      </form>
    </div>
  </template>

  <script>
import StarRating from 'vue-dynamic-star-rating'
  export default{
   components: {
  StarRating
},
data: function(fullStarColor) {
    return {
        rating: 4.7,
        starStyle: {
            fullStarColor: '#ed8a19',
            emptyStarColor: '#737373',
            starWidth: 30,
            starHeight: 30
        }
    }
}
}

</script>

<style>
.star-rating{
    color: gold;
}
</style>
  