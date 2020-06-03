

<template>
  <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col>
          <v-card
            class="mt-5 mb-10 pa-3"
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
                    식단 추천
                  </p>
                  <p class="subtitle-1 text--primary ma-0 ">
                    건강관리의 가장 중요한 부분은 무리한 운동이 아닌  
                    <strong>'식단관리'</strong>라고 합니다.</p>
                  <p class="subtitle-1 text--primary mt-3 ">
                    어떻게 보면 운동보다 힘든 것이 식습관 조절 일 수 있지만, 
                    <strong>적절한 밸런스</strong>를 <strong>My nutrition mate의 식단 추천 기능</strong>을 통해서 건강관리를 쉽게 할 수 있습니다.</p>
                  <v-divider></v-divider>
                  <p class="title text--primary mt-3 ">
                    <strong>이제부터 식단추천 테스트를 해봅시다!</strong></p>
                  <p class="subtitle-1 text--primary mt-3 ">
                    식단 추천은 <strong>회원가입 시 기입한 건강상태</strong>를 기반으로 합니다.</p>
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

