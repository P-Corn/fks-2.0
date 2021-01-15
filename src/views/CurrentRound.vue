<template>
  <div class="current-round">
    <div class="score-card-container">
      <ScoreCard></ScoreCard>
    </div>
  </div>
</template>

<script>
import ScoreCard from '../components/ScoreCard.vue'

export default {
  name: 'CurrentRound',
  components: {
    ScoreCard
  },
}
</script>

<style lang="scss">

.current-round {
  display: flex;
  justify-content: center;

}

</style>