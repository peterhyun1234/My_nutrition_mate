<template>
  <v-app id="inspire">
    <v-container grid-list-xl>
      <v-layout 
        align-center 
        justify-center
        row 
        wrap
      >
        <!-- <v-flex 
          xs12 px-0 
          v-if="!windowSize.mobile">
          <v-img 
            src="https://i.imgur.com/pqKHHID.png" 
            aspect-ratio="1.77"
            max-height="700"
            contain
          ></v-img>
        </v-flex>

        <v-flex 
          xs12 px-0 
          v-else>
          <v-img 
            src="https://i.imgur.com/P9eD47N.png" 
            aspect-ratio="1.14"
            max-height="700"
            contain
          ></v-img>
        </v-flex> -->

        <v-card
          class="pa-4 ma-3 text-left"
          outlined
        >
          <v-layout 
            row
            align-center 
            justify-center
          >
            <v-flex xs12 sm6 md6>
              <v-card
                elevation="10"
                max-width="300"
                class="mx-auto"
              >
                <v-carousel
                  :continuous="true"
                  :cycle="true"
                  :show-arrows-on-hover="true"
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  height="245"
                >
                <v-carousel-item
                  v-for="(item,i) in bridgeItems"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-card-text>
                <v-avatar 
                  color="#FFE0B2"
                  size="50"
                  >
                  <v-icon
                    color="#FFA726"
                    > mdi-bridge</v-icon>
                </v-avatar>
                <p class="headline text--primary mt-3">
                  식단 추천
                </p>
                <p class="subheading text--primary mt-3">
                  식단 추천에 대한 설명
                  식단 추천에 대한 설명
                  식단 추천에 대한 설명
                  식단 추천에 대한 설명
                  식단 추천에 대한 설명
                  식단 추천에 대한 설명
                  </p>
                <v-btn
                  text
                  color="green accent-4"
                  to="/bridge/description"
                >
                  <strong>식단 추천 설명</strong>
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/bridge/play"
                >
                  <strong>식단 추천 시작</strong>
                </v-btn>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card
          class="pa-4 ma-3 text-right"
          outlined
        >
          <v-layout 
            row
            align-center 
            justify-right
          >
            <v-flex xs12 sm6 md6>
              <v-card-text>
                <v-avatar 
                  color="#FFE0B2" 
                  size="50"
                  >
                  <v-icon 
                    color="#FFA726"
                    > mdi-account-heart-outline</v-icon>
                </v-avatar>
                <p class="headline text--primary mt-3">
                  메뉴 추천
                </p>
                <p class="subheading text--primary ma-0 font-weight-bold">
                메뉴 추천에 대한 설명
                메뉴 추천에 대한 설명
                메뉴 추천에 대한 설명
                메뉴 추천에 대한 설명
                메뉴 추천에 대한 설명
                메뉴 추천에 대한 설명
                </p>
                <v-divider>
                </v-divider>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/langOflove/test"
                >
                  <strong>메뉴 추천 시작</strong>
                </v-btn>
              </v-card-text>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-card
                elevation="10"
                max-width="300"
                class="mx-auto"
              >
                <v-carousel
                  :continuous="true"
                  :cycle="true"
                  :show-arrows-on-hover="true"
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  height="245"
                >
                <v-carousel-item
                  v-for="(item,i) in bridgeItems"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card
          class="pa-4 ma-3 text-center"
          outlined
        >
          <v-layout 
            row
            align-center 
            justify-center
          >
            <v-flex xs12 sm6 md4>
              <v-card-text>
                <v-avatar 
                  color="#FFE0B2" 
                  size="50"
                  >
                  <v-icon 
                    color="#FFA726"
                    > mdi-folder-information-outline</v-icon>
                </v-avatar>
                <p class="headline text--primary ma-5">
                  기능 3
                </p>
                <p class="subheading text--primary ma-3">
                  기능 3에 대한 설명
                  기능 3에 대한 설명
                  기능 3에 대한 설명
                  기능 3에 대한 설명
                  기능 3에 대한 설명
                  기능 3에 대한 설명</p>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/info/ccc"
                >
                  <strong>더 알아보기</strong>
                </v-btn>
              </v-card-text>
              <v-divider>
              </v-divider>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-card-text>
                <v-avatar 
                  color="#FFE0B2" 
                  size="50"
                  >
                  <v-icon 
                    color="#FFA726"
                    >mdi-sprout-outline</v-icon>
                </v-avatar>
                <p class="headline text--primary ma-5">
                  기능 4
                </p>
                <p class="subheading text--primary ma-3">
                  기능 4에 대한 설명기능 4에 대한 설명
                  기능 4에 대한 설명
                  기능 4에 대한 설명
                  기능 4에 대한 설명
                  기능 4에 대한 설명
                  기능 4에 대한 설명
                  기능 4에 대한 설명</p>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/prayer"
                >
                  <strong>더 알아보기</strong>
                </v-btn>
              </v-card-text>
              <v-divider>
              </v-divider>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-card-text>
                <v-avatar 
                  color="#FFE0B2" 
                  size="50"
                  >
                  <v-icon 
                    color="#FFA726"
                    >mdi-email-send-outline</v-icon>
                </v-avatar>
                <p class="headline text--primary ma-5">
                  기능 5
                </p>
                <p class="subheading text--primary ma-3">
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                  기능 5에 대한 설명
                </p>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/request"
                >
                  <strong>더 알아보기</strong>
                </v-btn>
              </v-card-text>
              <v-divider>
              </v-divider>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      bridgeItems: [
        {
          src: 'https://i.imgur.com/V0Pggmc.png',
        },
        {
          src: 'https://i.imgur.com/4pgyWuV.png',
        },
        {
          src: 'https://i.imgur.com/XjOcZDE.png',
        },        
        {
          src: 'https://i.imgur.com/O7qf6ZY.png',
        },
        {
          src: 'https://i.imgur.com/slW2DVU.png',
        },
      ],
      windowSize: {
        x: 0,
        y: 0,
        mobile: false
      },
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      if(window.innerWidth < 650){
        this.windowSize.mobile = true
      }
    }
  }
}
</script>