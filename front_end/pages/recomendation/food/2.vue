

<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="mt-5 mb-5 pa-3"
            shaped
            >
            <v-layout 
              row
              align-center 
              justify-center
            >
              <v-flex xs12 sm6 md6>
                <v-card-text>
                  <v-avatar 
                    color="#FFE0B2" 
                    size="50"
                    >
                    <v-icon 
                      color="#FFA726"
                      > mdi-food</v-icon>
                  </v-avatar>
                  <p class="headline text--primary mt-3">
                    추천된 메뉴
                  </p>
                  
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
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
    }
  },
}
</script>

