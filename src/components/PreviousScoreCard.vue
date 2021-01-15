<template>
  <div class="score-card">
    <v-container>
        <v-row class="score-card__header">
            <v-col>F</v-col>
            <v-col>K</v-col>
            <v-col>S</v-col>
        </v-row>
    </v-container>
    <hr class="hr">
    <v-container class="score-card__scores">
        <v-row class="score-row" v-for="(round, i) in currentGame" :key="i">
            <v-col>
                {{round.forks}}
            </v-col>
            <v-col>
                {{round.knives}}
            </v-col>
            <v-col>
                {{round.spoons}}
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import json from '../json/data.json'

export default {

  name: 'PreviousScoreCard',
  props: {
      id: Number
  },
  data: () => ({
      jsonData: json,
      uniqueId: 0,
      currentGame: null
  }),
  created() {
      this.uniqueId = this.id;
      this.getCurrentGame();
  },
  methods: {
      getCurrentGame() {
          this.currentGame = json.scoreCards[this.uniqueId]
          }
  },
}
</script>

<style scoped lang="scss">

.score-card {
    min-height: 400px;
    width: 225px;
    display: flex;
    flex-direction: column;
}

.score-row {
    margin-bottom: 10px;
}

</style>