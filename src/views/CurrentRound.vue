<template>
  <div class="current-round">
    <ScoreCard></ScoreCard>
  </div>
</template>

<script>
import ScoreCard from '../components/ScoreCard.vue'

export default {
  name: 'CurrentRound',
  components: {
    ScoreCard
  }
}
</script>