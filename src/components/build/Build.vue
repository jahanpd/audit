<template>
  <div class="flex flex-row justify-center">
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2" v-on:click="page=1">
            <a v-on:click="page=1" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">Features</a>
      </li>
      
      <li class="mr-2" v-on:click="page=2">
            <a v-on:click="page=2" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">Metrics</a>
      </li>

      <li class="mr-2" v-on:click="page=3">
            <a v-on:click="page=3" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">Goals</a>
      </li>

    </ul>
  </div>
  <Build1 v-if="page==1" :form="form"/>
  <Build2 v-if="page==2" :form="form"/>
  <Build3 v-if="page==3" :form="form"/>
</template>

<script>
import Build1 from './Build1.vue'
import Build2 from './Build2.vue'
import Build3 from './Build3.vue'

export default {
  name: 'Build',

  components: {
    Build1: Build1,
    Build2: Build2,
    Build3: Build3,
  },

  data(){
    return {
      form: {
        category: "",
        features: [],
        metrics: [],
        goals: [{metric:"", thresh:"", direction: ""}]
      },
      page: 1
    }
  },
  methods: {
    addFeature(fieldType){
      fieldType.push({name:"", datatype:"", units:"", var:""})
    },
    removeFeature(index, fieldType) {
      fieldType.splice(index, 1);
    },
  },
  watch: {
    "form.features": {
      deep: true,
      immediate:true,
      handler(val) {
        for (let i = 1; i <= this.form.features.length; i++) {
          this.form.features[i-1]["var"] = "x" + i.toString();
        };
      }
    }
  }
}
</script>
