<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col>
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
              <p class="display-1 text--primary">
                등록된 식단이 없습니다..
              </p>
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

