

<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col>
            <v-card
                class="mt-5 mb-5 pa-3"
                shaped>
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
                            최근 일주일동안 먹은 음식들
                        </p>
                        <v-divider></v-divider>
                        <p class="subtitle-1 text--primary mt-3 ">
                            식단 추천은 <strong>회원가입 시 기입한 건강상태</strong>를 기반으로 합니다.</p>
                        <p class="subtitle-1 text--primary mt-3 ">
                            추가적으로 <strong>최근 일주일동안 먹었던 음식</strong>들을 입력하면 보다 더 종교한 분석이 가능합니다!</p>
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
    data: () => ({
      refreshDialog: false,
    }),



    methods: {

    },
  }
</script>

