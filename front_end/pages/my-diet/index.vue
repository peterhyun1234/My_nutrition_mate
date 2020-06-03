<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col
          style="text-align: center;">
          <v-card
            class="mt-5 mb-10 pa-3"
            shaped
            v-if="!diet"
          >
            <v-img 
              src="https://i.imgur.com/zo9v8uL.png"
              aspect-ratio="1.77"
              max-height="700"
              contain
            ></v-img>
            <v-card-text>
              <p class="ma-5 display-1 text--primary">
                등록된 식단이 없습니다..
              </p>
              <v-btn 
                class="subtitle-1 font-weight-bold white--text" 
                color="green"
                to="/recomendation/weeks"
                large >
                <v-icon large>mdi-arrow-right-circle-outline</v-icon> 
                식단 추천 받기!
              </v-btn>
            </v-card-text>
          </v-card>
          <v-card
            class="mt-5 mb-10 pa-3"
            shaped
            v-else
          >
            <v-img 
              src="https://i.imgur.com/zo9v8uL.png"
              aspect-ratio="1.77"
              max-height="700"
              contain
            ></v-img>
          </v-card>
          <v-card>
            asdasd
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          class="my-2"
          style="text-align: center;"
        >
        asdasd
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      diet: ""
    }
  },
}
</script>

