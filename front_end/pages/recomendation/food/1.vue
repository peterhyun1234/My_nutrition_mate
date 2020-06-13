

<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col style="text-align: center;">
          <v-card
            class="mt-3 mb-3 pa-3"
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
                <p class="subtitle-1 text--primary mt-5 ">
                  회원가입 시 <strong>입력한 건강상태를 기반</strong>으로 메뉴를 추천합니다! 보다 더 정확한 추천을 위해 메뉴를 필터링 할 수 있습니다.
                </p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          class="mb-3"
          style="text-align: center;">
          <v-card
            class="mb-8 pa-3"
            shaped>
            <v-expansion-panels 
              class="mb-6"
              v-model="panel"
              multiple
            >
              <v-expansion-panel
                v-for="(item,i) in 1"
                :key="i"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down" disable-icon-rotate>
                  질문 {{i+1}}. {{questions[i].contents}}
                  <template 
                    v-slot:actions
                    v-if="radios[i]"
                  >
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                  <template 
                    v-slot:actions
                    v-else
                  >
                    <v-icon color="error">mdi-alert-circle</v-icon>
                  </template>
                </v-expansion-panel-header>
              
                <v-divider></v-divider>
                <v-expansion-panel-content
                  class= "mt-5">
                  <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                      v-model="checkBoxes[0]"
                      label="저염식"
                      color="success"
                      value="1"
                      hide-details
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkBoxes[1]"
                      label="고단백식"
                      color="info"
                      value="2"
                      hide-details
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkBoxes[2]"
                      label="저지방식"
                      color="warning"
                      value="3"
                      hide-details
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkBoxes[3]"
                      label="상관없음"
                      color="error"
                      value="doncare"
                      hide-details
                    ></v-checkbox>
                  </v-col>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
          <v-btn 
            class="subtitle-1 font-weight-bold white--text" 
            color="green"
            @click="showResult"
            large >
            <v-icon large>mdi-arrow-right-circle-outline</v-icon> 
            메뉴 추천 받기!
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

      refreshDialog: false,
      panel: [],
      radios: ["done"], 
      checkBoxes: [],
      questions: [
        {
          contents: "선호하는 식사을 선택(중복 선택 가능)"
        },      
      ],
    }
  },
  updated() {
    console.log(this.checkBoxes);

    if(this.checkBoxes[3] == "doncare"){
      console.log(this.checkBoxes);
      this.checkBoxes = ["", "", "", "clean"]
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init () {
      this.panel.push(0);
      
      //console.log(this.panel);
    },
    showResult(){
      // 하나라도 check 안한 항목이 있는지
      if(this.checkResult()){
        this.carculateResult();
      }
    },
    checkResult(){
      let uncheckedRadios = [];
      for(let i = 0; i < this.panel.length; i++){
        if(!this.radios[i]){
          uncheckedRadios.push(i+1);
        }
      }
      if(uncheckedRadios.length === 0){
        return true;
      }else{
        alert("체크하지 않은 항목이 있습니다!\n:" + uncheckedRadios);
        return false;
      }
    },
    carculateResult(){
      //console.log(this.checkBoxes)

      this.$router.push('./2');
    },
  },
}
</script>

