<template>
  <div class="score-card">
    <ul height="500">
        <li v-for="scoreCard in jsonData.scoreCards" :key="scoreCard.id">
            {{scoreCard}}
        </li>
    </ul>
  </div>
</template>

<script>
import json from '../json/data.json'

export default {

  name: 'ScoreCard',
  data: () => ({
      jsonData: json,
  }),
  computed: {

  },
  methods: {

  }
}
</script>
