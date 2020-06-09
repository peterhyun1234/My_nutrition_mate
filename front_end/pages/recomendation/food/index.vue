

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
                  건강관리까지 고려한 메뉴 추천은 <strong>건강관리까지</strong> 이어질 수 있습니다.</p>
                <v-divider>
                </v-divider>
                <v-btn
                  class="ma-3"
                  text
                  color="deep-purple accent-4"
                  to="/recomendation/food/1"
                >
                  <strong>메뉴 추천 시작</strong>
                </v-btn>
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
      email: "",
    }
  },
  mounted() {
    const recievedID = localStorage.getItem("ID");
    const parsedID = JSON.parse(recievedID);

    this.email = parsedID

    if(parsedID == null){
      this.$router.push('../signin')
    }

  },
}
</script>

