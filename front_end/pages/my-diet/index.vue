<template>
  <v-app id="inspire">
    <v-tabs
      background-color="amber darken-1"
      dark
      fixed-tabs
    >
      <v-tab>
      <v-icon left>mdi-account</v-icon>
        식단 확인 및 체크
      </v-tab>
      <v-tab>
        <v-icon left>mdi-chart-bar-stacked</v-icon>
        식단 분석
      </v-tab>
      <v-tab>
        <v-icon left>mdi-shield-refresh-outline</v-icon>
        재점검
      </v-tab>
      <v-tab-item style="background-color: #f2f2f2;">
        <v-container grid-list-xl>
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
              <v-sheet
                class="mx-auto"
                elevation="2"
                max-width="800"
              >
                <p class="subtitle-1 text--primary pa-4">
                  <strong>클릭</strong>하면 <strong>섭취한 음식을 체크</strong>할 수 있고, <strong>식단 외 음식을 등록</strong>할 수 있습니다.</p>
                <v-divider></v-divider>
                <v-slide-group
                  v-model="slideGroup"
                  class="pa-0"
                  center-active
                  show-arrows
                >
                  <v-slide-item
                    v-for="n in 7"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                  >
                    <v-card
                      :color="active ? 'primary' : 'white'"
                      elevation="1"
                      width="150"
                      @click="toggle"
                    >
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <v-card-text>
                          <v-avatar 
                            color="#FFE0B2" 
                            size="50"
                            >
                            <strong>{{day[n-1]}}</strong>
                          </v-avatar>
                          <v-divider></v-divider>
                          <v-card class="subtitle-1 text--primary mt-3" color="#FFE0B2">
                            아침
                          </v-card>
                          <p class="ma-5 title text--primary">
                            아침 식단 정보
                          </p>
                          <p class="ma-5 title text--primary">칼로리</p>
                          <v-card class="subtitle-1 text--primary mt-3" color="#FFE0B2">
                            점심
                          </v-card>
                          <p class="ma-5 title text--primary">
                            점심 정보
                          </p>
                          <p class="ma-5 title text--primary">칼로리</p>
                          <v-card class="subtitle-1 text--primary mt-3" color="#FFE0B2">
                            저녁
                          </v-card>
                          <p class="ma-5 title text--primary">
                            저녁 정보
                          </p>
                          <p class="ma-5 title text--primary">칼로리</p>
                          <v-card class="subtitle-1 text--primary mt-3" color="#FFE0B2">
                            간식
                          </v-card>
                          <p class="ma-5 title text--primary">
                            간식 정보
                          </p>
                          <p class="ma-5 title text--primary">칼로리</p>
                        </v-card-text>
                        <v-scale-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                          ></v-icon>
                        </v-scale-transition>
                      </v-row>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
                <v-expand-transition>
                  <v-sheet
                    v-if="slideGroup != null"
                    color="grey lighten-4"
                    height="200"
                    tile
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <h3 class="title">Selected {{ slideGroup }}</h3>
                    </v-row>
                  </v-sheet>
                </v-expand-transition>
              </v-sheet>

              <v-btn 
                class="subtitle-1 font-weight-bold white--text ma-4" 
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
      </v-tab-item>
      <v-tab-item style="background-color: #f2f2f2;">
        <v-container grid-list-xl>
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
              <v-card 
              class="mb-2">
                <v-btn
                  icon
                  class="ma-2"
                  @click="leftDataBtn"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                {{selectedDate}}
                <v-btn
                  icon
                  class="ma-2"
                  @click="rightDataBtn"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card>
              <ejs-accumulationchart id="container" :legendSettings='legendSettings' :tooltip='tooltip'>
                <e-accumulation-series-collection>
                  <e-accumulation-series 
                  :dataSource='seriesData' 
                  xName='x' yName='y'
                  :radius='radius'
                  :border='border'
                  :dataLabel='datalabel'
                  :pointColorMapping=' pointColorMapping'> </e-accumulation-series>
                </e-accumulation-series-collection>
              </ejs-accumulationchart>
              <v-list class="mb-5" three-line subheader>
                <v-subheader>지난 일주일동안 먹은 식사 분석 결과 (총 칼로리: {{totalCallories}}kcal)</v-subheader>
                <v-list-item class="mb-5">
                  <v-list-item-action>
                    <v-avatar 
                      color="#F5F5F5" 
                      size="50"
                      >
                      <v-icon 
                        :color="seriesData[0].fill"
                        > {{ seriesData[0].icon }}</v-icon>
                    </v-avatar>
                  </v-list-item-action>

                  <v-card
                    class="mx-auto"
                    max-width="900"
                    outlined
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="body-2 mb-2">권장량 이상 섭취한 성분: </div>
                        <v-list-item-title class="headline mb-3">
                          <v-card 
                            class="pt-1 pb-1"
                            style="text-align: center;" 
                            max-width="220" 
                            :color="seriesData[3].fill">
                            <v-card
                              class="ml-6 mr-6"
                              style="opacity: 0.7"
                              max-width="170"
                              outlined
                              color="white">
                              {{ seriesData[3].x }}
                            </v-card>
                          </v-card>
                        </v-list-item-title>
                        <v-list-item-action-text class="body-2">{{ seriesData[3].simpleDescription }}</v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>

                  <v-card-actions>
                      <v-expansion-panels
                        flat Popout>
                        <v-expansion-panel>
                          <v-expansion-panel-header class="body-1 text--secondary">
                            더 보기
                            <template v-slot:actions>
                              <v-icon color="primary">$expand</v-icon>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            {{seriesData[3].description }}
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-actions>
                  </v-card> 
                </v-list-item>
                <v-list-item class="mb-5">
                  <v-list-item-action>
                    <v-avatar 
                      color="#F5F5F5" 
                      size="50"
                      >
                      <v-icon 
                        :color="seriesData[1].fill"
                        > {{ seriesData[1].icon }}</v-icon>
                    </v-avatar>
                  </v-list-item-action>

                  <v-card
                    class="mx-auto"
                    max-width="900"
                    outlined
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="body-2 mb-2">권장량 이하 섭취한 성분: </div>
                        <v-list-item-title class="headline mb-3">
                          <v-card 
                            class="pt-1 pb-1"
                            style="text-align: center;" 
                            max-width="220" 
                            :color="seriesData[1].fill">
                            <v-card
                              class="ml-6 mr-6"
                              style="opacity: 0.7"
                              max-width="170"
                              outlined
                              color="white">
                              {{ seriesData[1].x }}
                            </v-card>
                          </v-card>
                        </v-list-item-title>
                        <v-list-item-action-text class="body-2">{{ seriesData[1].simpleDescription }}</v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>

                  <v-card-actions>
                      <v-expansion-panels
                        flat Popout>
                        <v-expansion-panel>
                          <v-expansion-panel-header class="body-1 text--secondary">
                            더 보기
                            <template v-slot:actions>
                              <v-icon color="primary">$expand</v-icon>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            {{seriesData[1].description }}
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-actions>
                  </v-card> 
                </v-list-item>
              </v-list>
            </v-col>
            
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item style="background-color: #f2f2f2;">
        <v-container grid-list-xl>
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
              <v-card
                class="mt-5 mb-5 pa-3"
                shaped
                >
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
                    식단 재추천
                  </p>
                  <p class="subtitle-1 text--primary ma-0 ">
                    건강관리의 가장 중요한 부분은 무리한 운동이 아닌  
                    <strong>'식단관리'</strong>라고 합니다.</p>
                  <p class="subtitle-1 text--primary mt-3 ">
                    그리고 식단관리는 일주일으로 끝나는 것이 아니라
                    <strong> 꾸준한 관리</strong>를 했을 때 효과를 볼 수 있기 때문에 지속적으로 식단을 관리해야 합니다!</p>
                  <v-divider></v-divider>
                  <p class="title text--primary mt-3 ">
                    <strong>먹었던 음식을 체크하셨다면, 음식들의 성분을 기반으로 <strong>필요한 영양소의 균형을 맞춘 식단</strong>이 제공됩니다!</strong></p>
                </v-card-text>
                <v-btn 
                  class="subtitle-1 font-weight-bold white--text" 
                  color="green"
                  to="../recomendation/weeks"
                  large >
                  <v-icon large>mdi-arrow-right-circle-outline</v-icon> 
                  식단 다시 추천 받기!
                </v-btn>
              </v-card>
            </v-col>
            
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>

<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

export default {
  components: {
  },
  data () {
    return {

      slideGroup: null,

      selectedDate: "",
      totalCallories: 1875,

      day: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일",],

      legendSettings:{ 
        position:'Top' ,
        alignment:'Center',
        shapeHeight: 25, shapeWidth: 25,
      },
      seriesData: [
          { x: '지방', y: 2.4, fill: '#81C784', text: 'A', r: '120', 
            percentage: "",
            icon: 'mdi-podcast', 
            simpleDescription: "하루 평균 섭취량은 16.7g으로 영양소 기준치(15g)를 초과한 상태입니다. 포화지방은 실온에서 딱딱하게 굳어 있는 ‘굳기름’으로, 혈중 콜레스테롤과 중성지방 수치를 올려 혈관 건강에 해롭습니다.", 
            description: "추가적인 초과 영양소 등록"}, 
          { x: '단백질', y: 4, fill: '#AED581', text: 'B', r: '120', 
            percentage: "",
            icon: 'mdi-human-male-female', 
            simpleDescription: "함께하는 시간이 주언어인 사람들은 누군가가 자신에게 온전히 관심을 집중시키고 있을때 사랑을 느낍니다.", 
            description: "단순히 상대방과 함께있는걸 좋아하는 것이 아니라, 함께하는 활동 속에서 상대방이 온전히 나에게 집중하고, 관심을 기울여 주기를 원합니다. 함께 외식을 하거나 영화구경을 하면서 서로의 관심 을 나누고, 그 사람의 눈을 마주보며 이야기를 경청해준다면 그 사람을 분명 당신의 사랑을 느낄 수 있을것입니다."}, 
          { x: '탄수화물', y: 3, fill: '#DCE775', text: 'C', r: '120', 
            icon: 'mdi-gift-outline', 
            simpleDescription: "선물이 주언어인 선물이 사람들은 선물이 사랑을 표현하는 수단이라 생각하며 사랑을 나타내는 상징이라 믿습니다.", 
            description: "어떤 사람들은 아름다운 보석이나, 값비싼 물건을 선물해야만 사랑이 전달된다고 믿습니다. 하지만 이 사람들에겐 아주 작은 선물이라도 사랑이 전달되기엔 충분합니다. 주는 사람의 마음만 듬뿍 담겨 있다면 선물의 크고 작음에는 전혀 관계가 없습니다. 당신이 전하는 사랑이 듬뿍 담긴 작은 쪽지 하나라도 이 사람들에겐 평생 간직해고픈 큰 선물일 것입니다." },
          { x: '철분', y: 1.3, fill: '#FFB74D', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "물을 충분히 마시지 않고 몸에 수분을 보충하지 않으면, 효소 활동률이 감소하며 피로가 몰려옵니다. 피로는 항상 피곤함을 느끼고 활력이 낮아지게 만드는 심각한 건강상의 문제입니다.", 
            description: "추가적인 부족 영양소 등록" }, 
          { x: '수분', y: 3.2, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "물을 충분히 마시지 않고 몸에 수분을 보충하지 않으면, 효소 활동률이 감소하며 피로가 몰려옵니다. 피로는 항상 피곤함을 느끼고 활력이 낮아지게 만드는 심각한 건강상의 문제입니다.", 
            description: "추가적인 부족 영양소 등록" },
          { x: '회분', y: 0.3, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "봉사의 손길을 주언어로 가진 사람들은 상대방이 자신을 도와줄때 행복을 느낍니다.", 
            description: "누군가 자신을 위해 무언가를 해줄때 그 속에서 사랑을 느낍니다. 자신의 입으로 원하는 것을 말하기 전에 나를 위해 계획을 세우고 시간을 내서 노력해주길 원합니다. 설겆이, 청소 도와주기, 무거운 물건 대신 들어주기, 등등 누군가 자신을 위해 봉사의 손길을 내민다면 이 사람을 분명히 사랑을 느낄 것입니다." }, 
          { x: '비타민 B1', y: 0.3, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "봉사의 손길을 주언어로 가진 사람들은 상대방이 자신을 도와줄때 행복을 느낍니다.", 
            description: "누군가 자신을 위해 무언가를 해줄때 그 속에서 사랑을 느낍니다. 자신의 입으로 원하는 것을 말하기 전에 나를 위해 계획을 세우고 시간을 내서 노력해주길 원합니다. 설겆이, 청소 도와주기, 무거운 물건 대신 들어주기, 등등 누군가 자신을 위해 봉사의 손길을 내민다면 이 사람을 분명히 사랑을 느낄 것입니다." }, 
          { x: '비타민 B2', y: 0.3, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "봉사의 손길을 주언어로 가진 사람들은 상대방이 자신을 도와줄때 행복을 느낍니다.", 
            description: "누군가 자신을 위해 무언가를 해줄때 그 속에서 사랑을 느낍니다. 자신의 입으로 원하는 것을 말하기 전에 나를 위해 계획을 세우고 시간을 내서 노력해주길 원합니다. 설겆이, 청소 도와주기, 무거운 물건 대신 들어주기, 등등 누군가 자신을 위해 봉사의 손길을 내민다면 이 사람을 분명히 사랑을 느낄 것입니다." }, 
          { x: '콜레스테롤', y: 0.3, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "봉사의 손길을 주언어로 가진 사람들은 상대방이 자신을 도와줄때 행복을 느낍니다.", 
            description: "누군가 자신을 위해 무언가를 해줄때 그 속에서 사랑을 느낍니다. 자신의 입으로 원하는 것을 말하기 전에 나를 위해 계획을 세우고 시간을 내서 노력해주길 원합니다. 설겆이, 청소 도와주기, 무거운 물건 대신 들어주기, 등등 누군가 자신을 위해 봉사의 손길을 내민다면 이 사람을 분명히 사랑을 느낄 것입니다." }, 
          { x: '나이아신', y: 0.3, fill: '#FFF176', text: 'D', r: '120', 
            percentage: "",
            icon: 'mdi-hand-heart', 
            simpleDescription: "봉사의 손길을 주언어로 가진 사람들은 상대방이 자신을 도와줄때 행복을 느낍니다.", 
            description: "누군가 자신을 위해 무언가를 해줄때 그 속에서 사랑을 느낍니다. 자신의 입으로 원하는 것을 말하기 전에 나를 위해 계획을 세우고 시간을 내서 노력해주길 원합니다. 설겆이, 청소 도와주기, 무거운 물건 대신 들어주기, 등등 누군가 자신을 위해 봉사의 손길을 내민다면 이 사람을 분명히 사랑을 느낄 것입니다." }, 
          { x: '식이섬유', y: 0.3, fill: '#FFF176', text: 'E', r: '120', 
            percentage: "",
            icon: 'mdi-heart-box-outline', 
            simpleDescription: "스킨쉽이 주언어인 사람들은 말그대로 상대방과의 신체접촉을 통해서 행복을 느낍니다.", 
            description: "이 사람들은 힘들때 누군가 손을 잡아 주거나 어깨를 한번 두드려주는 것만으로도 아주 큰 힘이 얻습니다. 상대방이 손으로 머리를 쓰다듬고 사랑을 듬뽁담아 안아준다면 \"난 혼자가 아니야\", \"행복하다\"란 사랑의 감정을 느끼게 될 것입니다." }, 
      ],
      radius: 'r',
      border: {color: 'white', width: 3},
      tooltip:{
        enable: true, 
        format: '${series.name} ${point.x} : ${point.y}',
      },
      datalabel: {
        visible: true,
        position: 'Inside',
        name: 'percentage',
        font: {color: "white", size: "16px" },
      },
      pointColorMapping: 'fill',










      tab: null,
      items: [
        { tab: '확인 및 체크', content: 'Tab 1 Content' },
        { tab: '분석', content: 'Tab 2 Content' },
      ],


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

  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]
  },
  created() {
    this.init();
  },
  mounted() {
    const recievedDiet = localStorage.getItem("diets");
    //const parsedDiet = JSON.parse(recievedDiet);

    this.diet = recievedDiet

    const recievedID = localStorage.getItem("ID");
    const parsedID = JSON.parse(recievedID);

    this.email = parsedID

    if(parsedID == "" || parsedID == null){
      this.$router.push('./signin')
    }



    // var myHeaders = new Headers();
    // myHeaders.append("session", "dummy");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch("https://hci.lminjae.ml/recommendation", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));


    // fetch("https://hci.lminjae.ml/dash", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  },
  methods: {
    init () {

      let today = new Date(); 

      this.selectedDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

      this.seriesData.sort(function(a, b){
        return b.y - a.y;
      })
      this.seriesData[0].r = "130";
      this.seriesData[1].r = "125";
    },
    leftDataBtn(){
      this.selectedDate = this.addDays(this.selectedDate, -1)
    },
    rightDataBtn(){
      this.selectedDate = this.addDays(this.selectedDate, 1)
    },
    addDays(date, days) {
      var result = new Date(date);
      let parsedResult
      result.setDate(result.getDate() + days);

      parsedResult = result.getFullYear()+'-'+(result.getMonth()+1)+'-'+result.getDate()
      return parsedResult; 
    },
  }
}
</script>

