<template>
  <div class="previous-rounds">
    <div class="score-card-container">
      <ul v-for="(item, id) in jsonData.scoreCards" :key="id">
          <li>
          <PreviousScoreCard :id="id"></PreviousScoreCard>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PreviousScoreCard from '../components/PreviousScoreCard.vue'
import json from '../json/data.json'

export default {
  name: 'PreviousRounds',
  components: {
    PreviousScoreCard
  },
  data: () => ({
      jsonData: json,
  }),
}
</script>

<style lang="scss">

.previous-rounds {
  display: flex;
  justify-content: center;
}

</style>