

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
      <v-row>
        <v-col>
          <v-card
            class="mt-5 mb-5 pa-3"
            shaped>
            <v-card-title>
            알러지 검색
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
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          class="mb-5"
          style="text-align: center;">
          <v-card
            class="mt-5 mb-8 pa-3"
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
            식단 추천 받기!
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
  export default {
    data: () => ({

      search: '',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: '음식 종류',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
      desserts: [
        { name: '난류(가금류)',},
        { name: '우유',},
        { name: '메밀',},
        { name: '땅콩',},
        { name: '대두',},
        { name: '밀',},
        { name: '고등어',},
        { name: '게',},
        { name: '새우',},
        { name: '돼지고기',},
        { name: '복숭아',},
        { name: '토마토',},
        { name: '아황산류',},
        { name: '호두',},
        { name: '닭고기',},
        { name: '쇠고기',},
        { name: '오징어',},
        { name: '조개류(굴, 전복 홍합 포함)',},
      ],


      email: "",

      panel: [],
      radios: ["done"], 
      checkBoxes: [],
      questions: [
        {
          contents: "선호하는 식사을 선택(중복 선택 가능)"
        },      
      ],


    }),

    updated() {
      //console.log(this.selected);
      //console.log(this.checkBoxes);

      if(this.checkBoxes[3] == "doncare"){
        console.log(this.checkBoxes);
        this.checkBoxes = ["", "", "", "clean"]
      }
    },

    mounted() {
      this.init();

      const recievedID = localStorage.getItem("ID");
      const parsedID = JSON.parse(recievedID);

      this.email = parsedID

      if(parsedID == "" || parsedID == null ){
        this.$router.push('../signin')
      }
      //알러지 정보 받아오기!!
      //example
      const allergy = [
        {name: "고등어"},
        {name: "땅콩"},
      ]
      for(let i = 0; i < allergy.length; i++)
        this.selected.push(allergy[i]) 

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
        // initialize result for exact checking
        // this.result["A"] = 0;
        // this.result["B"] = 0;
        // this.result["C"] = 0;
        // this.result["D"] = 0;
        // this.result["E"] = 0;
        // //console.log(this.radios);
        // for(let i = 0; i < this.radios.length; i++){
        //   if(this.radios[i] === "opt1"){
        //     this.result[this.questions[i].option1_prop]++;
        //   }else{
        //     this.result[this.questions[i].option2_prop]++;
        //   }
        // }
        
        // using localstorage
        //localStorage.setItem("result", JSON.stringify(this.result));
        // 참고: https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page
        this.$router.push('../my-diet');
        //console.log("carculateResult");
      },
    },
  }
</script>

