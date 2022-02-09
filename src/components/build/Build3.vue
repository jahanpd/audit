<template>
  <div v-for="(goal, index) in form.goals">
    <div class="flex flex-row gap-3">
      <div class="basis-1/12"/>
        <select
        class="flex shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        v-model="goal.name"
        > 
          <option value="" disabled selected>metric</option>
          <option v-for="met in form.metrics" :value="met.name">{{ met.name }}</option>
        </select>
        <input 
        v-model="goal.thresh"
        class="flex justify shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="category" 
        type="number" 
        placeholder="threshold">
        <select
        class="flex shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        v-model="goal.direction"
        > 
          <option value="" disabled selected>direction</option>
          <option value="above">above</option>
          <option value="below">below</option> 
        </select>
        <span
        @click="removeFeature(index, form.goals)"
        class="flex items-center hover:text-red-500"
        ><svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z" ></path>
            </svg>
        </span>
      <div class="basis-1/12"/>
    </div>
  </div>

  <div class="flex flex-row gap-3">
      <div class="w-full"/>
    <span
          @click="addFeature(form.goals)"
          class="flex items-center hover:text-green-500 "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
              ></path>
              </svg>
          </span><div class="w-full"/>
  </div>

<div class="flex flex-row gap-3 justify-center">
    <button 
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      @click="sendData(form)"
    >
      Submit Build
    </button>
  </div>
</template>

<script>

export default {
  name: 'Build3',
  props: {
    form: Object
  },

  data(){
    return {

    }
  },
  methods: {
    addFeature(fieldType){
      fieldType.push({metric:"", thresh:"", direction:""})
    },
    removeFeature(index, fieldType) {
      fieldType.splice(index, 1);
    },

  },
}
</script>

