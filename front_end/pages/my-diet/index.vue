<template>
  <v-app id="inspire">
    <v-container>
      <v-row 
        v-if="!diet">
        <v-col
          style="text-align: center;">
          <v-card
            class="mt-5 mb-10 pa-3"
            shaped
          >
            <v-img 
              src="https://i.imgur.com/zo9v8uL.png"
              max-height="700"
              contain
            ></v-img>
            <v-card-text>
              <p class="ma-5 title text--primary">
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
        </v-col>
      </v-row>

      <v-row
        no-gutters
        v-else
      >
        <v-col
          style="text-align: center;"
        >
          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-default-footer
            class="elevation-1 mb-5 mt-5"
          ></v-data-table>

          <v-btn 
            class="subtitle-1 font-weight-bold white--text" 
            color="green"
            to="/recomendation/weeks"
            large >
            <v-icon large>mdi-arrow-right-circle-outline</v-icon> 
            건강 상태 재점검!
          </v-btn>
          <v-btn 
            class="subtitle-1 font-weight-bold white--text" 
            color="green"
            disabled
            to="/recomendation/weeks"
            large >
            <v-icon large>mdi-image-move</v-icon> 
            사진으로 저장하기
          </v-btn>
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
      diet: "",
      tempDiet: "",
      headers: [
        {
          text: '',
          align: 'start',
          value: 'name',
        },
        { text: '1일', value: 'day1' },
        { text: '2일', value: 'day2' },
        { text: '3일', value: 'day3' },
        { text: '4일', value: 'day4' },
        { text: '5일', value: 'day5' },
        { text: '6일', value: 'day6' },
      ],

      desserts: [
        {
          name: '아침',
          day1: "다섯가지 나물밥과 제육볶음(346kcal)",
          day2: "곤드레 나물밥과 닭가슴살 슬라이스(346kcal)",
          day3: "귀리현미 잡곡밥과 표고버섯 불고기(346kcal)",
          day4: "탄두리 닭가슴살 현미밥과 참치오믈렛(346kcal)",
          day5: "곤드레 나물밥과 닭가슴살 슬라이스(346kcal)",
          day6: "귀리현미 잡곡밥과 표고버섯 불고기(346kcal)",
        },
        {
          name: '점심',
          day1: "자유식 (500kcal)",
          day2: "자유식 (500kcal)",
          day3: "자유식 (500kcal)",
          day4: "자유식 (500kcal)",
          day5: "자유식 (500kcal)",
          day6: "자유식 (500kcal)",
        },
        {
          name: '저녁',
          day1: "탄두리 닭가슴살 현미밥과 참치오믈렛(346kcal)",
          day2: "퀴로나 영양밥과 닭가슴살 스테이크(346kcal)",
          day3: "닭가슴살 볶음밥과 두부 스테이크(346kcal)",
          day4: "다섯가지 나물밥과 제육볶음(346kcal)",
          day5: "닭가슴살 볶음밥과 두부 스테이크(346kcal)",
          day6: "퀴로나 영양밥과 닭가슴살 스테이크(346kcal)",
        },
        {
          name: '간식',
          day1: "그릭요거트 (105kcal)",
          day2: "그릭요거트 (105kcal)",
          day3: "그릭요거트 (105kcal)",
          day4: "그릭요거트 (105kcal)",
          day5: "그릭요거트 (105kcal)",
          day6: "그릭요거트 (105kcal)",
        },
        {
          name: '총 칼로리',
          day1: "1105kcal",
          day2: "1205kcal",
          day3: "1405kcal",
          day4: "1305kcal",
          day5: "1205kcal",
          day6: "1105kcal",
        },
      ],
    }
  },
  mounted() {
    const recievedDiet = localStorage.getItem("diets");
    const parsedDiet = JSON.parse(recievedDiet);

    this.diet = parsedDiet

    const recievedID = localStorage.getItem("ID");
    const parsedID = JSON.parse(recievedID);

    this.email = parsedID

    if(parsedID == null){
      this.$router.push('./signin')
    }

  },
}
</script>

