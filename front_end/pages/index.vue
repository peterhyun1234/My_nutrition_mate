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
                  v-for="(item,i) in weekItems"
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
                    > mdi-food</v-icon>
                </v-avatar>
                <p class="headline text--primary mt-3">
                  식단 추천
                </p>
                <p class="subtitle-1 text--primary mt-3 ">
                  운동보다 힘든 것이 식습관 조절 일 수 있지만, 
                  <strong>적절한 밸런스</strong>를 <strong>My nutrition mate의 식단 추천 기능</strong>을 통해서 건강관리를 쉽게 할 수 있습니다.</p>
                <v-divider></v-divider>
                <p class="subtitle-1 text--primary mt-3 ">
                  식단 추천은 <strong>회원가입 시 기입한 건강상태</strong>를 기반으로 합니다.</p>
                <v-btn
                  text
                  color="green accent-4"
                  to="/recomendation"
                >
                  <strong>식단 추천 설명</strong>
                </v-btn>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/recomendation/weeks"
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
                  v-for="(item,i) in foodItems"
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
                    >mdi-food-variant</v-icon>
                </v-avatar>
                <p class="headline text--primary mt-3">
                  메뉴 추천
                </p>
                <p class="subtitle-1 text--primary mt-3 ">
                  자취생, 직장인들이 매일하는 고민중 하나가 
                  <strong>'오늘 뭐먹지..?'</strong> 입니다. <strong>My nutrition mate의 메뉴 추천 기능</strong>을 통해서 선택지를 줄여보세요!</p>
                <v-divider></v-divider>
                <p class="subtitle-1 text--primary mt-3 ">
                  건강관리까지 고려한 메뉴 추천은 <strong>건강관리까지</strong>이어질 수 있습니다.</p>
                <v-divider>
                </v-divider>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/recomendation/food"
                >
                  <strong>메뉴 추천 시작</strong>
                </v-btn>
              </v-card-text>
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
            <v-flex xs12 sm12 md4>
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
                  커뮤니티
                </p>
                <p class="subheading text--primary ma-2">
                  커뮤니티 가벼운 소통 도구로, 여러 사용자가 <strong>다양한 방법으로 소통</strong>할 수 있도록 해 줍니다. 
                  다양한 콘텐츠 유형을 통해 <strong>서로 시너지를 발휘해서 건강관리</strong>를 재밌게 할 수 있습니다!
                </p>
                <v-divider></v-divider>
                <p class="subheading text--primary ma-3">
                  나와 <strong>비슷한 사람의 식단</strong>을 찾아보고! 비교하고 싶다면?!
                </p>
                
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/info"
                >
                  <strong>더 알아보기</strong>
                </v-btn>
              </v-card-text>
              <v-divider>
              </v-divider>
            </v-flex>
            <v-flex xs12 sm12 md4>
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
                  추가 기능 1
                </p>
                <p class="subheading text--primary ma-3">
                  아직 구현하지 않은 기능 1에 대한 설명입니다.
                </p>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/info"
                >
                  <strong>더 알아보기</strong>
                </v-btn>
              </v-card-text>
              <v-divider>
              </v-divider>
            </v-flex>
            <v-flex xs12 sm12 md4>
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
                  추가 기능 2
                </p>
                <p class="subheading text--primary ma-3">
                  아직 구현하지 않은 기능 2에 대한 설명입니다.
                </p>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  to="/info"
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
      weekItems: [
        {
          src: 'https://i.imgur.com/N39qoM1.png', //667 X 571 needed
        },
        {
          src: 'https://i.imgur.com/yCLRxnD.png',
        },
        {
          src: 'https://i.imgur.com/3olvb9s.png',
        },        
        {
          src: 'https://i.imgur.com/CWTLjNg.png',
        },
      ],

      foodItems: [
        {
          src: 'https://i.imgur.com/SrFzc6X.png', //667 X 571 needed
        },
        {
          src: 'https://i.imgur.com/YYGcA36.png',
        },
        {
          src: 'https://i.imgur.com/jjaEG6s.png',
        },        
        {
          src: 'https://i.imgur.com/8Q7u88Z.png',
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