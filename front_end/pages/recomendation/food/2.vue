

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
                  <v-img 
                    src="https://i.imgur.com/L6R0QM4.png" 
                    aspect-ratio="0.88"
                    max-height="800"
                    contain
                  ></v-img>
                  <v-divider class="mt-5"></v-divider>
                  <v-card-title class="mb-5">
                    닭 가슴살 야채 볶음밥
                  </v-card-title>

                  <v-card-subtitle >
                    "담백한 닭가슴살을 넣은 고소한 야채볶음밥 "
                  </v-card-subtitle>
                  <v-divider class="mt-2"></v-divider>
                  <v-card-title class="mb-5">
                    재료 (1인분 기준)
                  </v-card-title>

                  <v-card-subtitle>
                    -- 밥 한공기
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 당근 1/4개
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 피망 1/5개
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 양파 1/4개
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 닭가슴살 200g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 통깨, 포도씨유, 소금
                  </v-card-subtitle>
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

  mounted() {
    //bring the img text 
  },
}
</script>

