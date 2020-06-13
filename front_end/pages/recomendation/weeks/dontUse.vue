

<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col
        style="text-align: center;">
            <v-card
                class="mt-5 mb-5 pa-3"
                shaped>
                <v-layout 
                    row
                    align-center 
                    justify-center
                    >
                    <v-flex xs12 sm12 md12>
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
                            최근 일주일동안 먹은 음식들
                        </p>
                        <v-divider></v-divider>
                        <p class="subtitle-1 text--primary mt-3 ">
                            식단 추천은 <strong>회원가입 시 기입한 건강상태</strong>를 기반으로 합니다.</p>
                        <p class="subtitle-1 text--primary mt-3 ">
                            추가적으로 <strong>최근 일주일동안 먹었던 음식</strong>들을 입력하면 보다 더 정교한 분석이 가능합니다!</p>
                        </v-card-text>
                        <v-divider></v-divider>
                    </v-flex>
                    <v-flex xs12 sm12 md12 class="mt-5 mb-5">
                        <v-card-title>
                        음식 이름
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            v-model="selected"
                            :headers="headers"
                            :items="desserts"
                            show-select
                            :single-select="singleSelect"
                            item-key="name"
                            :search="search"
                        >  
                        </v-data-table>
                    </v-flex>
                </v-layout>
            </v-card>
            <v-btn 
                class="subtitle-1 font-weight-bold white--text" 
                color="green"
                @click="showResult"
                large >
                <v-icon large>mdi-arrow-right-circle-outline</v-icon> 
                다음
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
  export default {
data () {
      return {
        search: '',
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: '음식 명',
            align: 'start',
            sortable: false,
            value: 'name',
          },
        ],
        desserts: [
          {
            name: '김치 볶음밥',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: '샌드위치',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: '라면',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: '컵 케이크',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: '시리얼',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: '회 덮밥',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: '칼국수',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: '밥버거',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: '도넛',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: '비빔밥',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },


    methods: {
        showResult(){
            this.$router.push('./2');
        },
    },
  }
</script>

