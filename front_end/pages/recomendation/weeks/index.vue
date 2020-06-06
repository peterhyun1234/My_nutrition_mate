

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
              추가할 알러지 정보를 기입해주세요.
            </v-card-title>
            <v-combobox
              v-model="model"
              :filter="filter"
              :hide-no-data="!search"
              :items="items"
              :search-input.sync="search"
              hide-selected
              label="Search for an option"
              multiple
              small-chips
              solo
            >
              <template v-slot:no-data>
                <v-list-item>
                  <span class="subheading">Create</span>
                  <v-chip
                    :color="`${colors[nonce - 1]} lighten-3`"
                    label
                    small
                  >
                    {{ search }}
                  </v-chip>
                </v-list-item>
              </template>
              <template v-slot:selection="{ attrs, item, parent, selected }">
                <v-chip
                  v-if="item === Object(item)"
                  v-bind="attrs"
                  :color="`${item.color} lighten-3`"
                  :input-value="selected"
                  label
                  small
                >
                  <span class="pr-2">
                    {{ item.text }}
                  </span>
                  <v-icon
                    small
                    @click="parent.selectItem(item)"
                  >mdi-close</v-icon>
                </v-chip>
              </template>
              <template v-slot:item="{ index, item }">
                <v-text-field
                  v-if="editing === item"
                  v-model="editing.text"
                  autofocus
                  flat
                  background-color="transparent"
                  hide-details
                  solo
                  @keyup.enter="edit(index, item)"
                ></v-text-field>
                <v-chip
                  v-else
                  :color="`${item.color} lighten-3`"
                  dark
                  label
                  small
                >
                  {{ item.text }}
                </v-chip>
                <v-spacer></v-spacer>
                <v-list-item-action @click.stop>
                  <v-btn
                    icon
                    @click.stop.prevent="edit(index, item)"
                  >
                    <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                  </v-btn>
                </v-list-item-action>
              </template>
            </v-combobox>
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
                v-for="(item,i) in 3"
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
                  <v-radio-group v-model="radios[i]">
                    <v-radio value="opt1">
                      <template v-slot:label>
                        <div>{{questions[i].option1}}</div>
                      </template>
                    </v-radio>
                    <v-radio value="opt2">
                      <template v-slot:label>
                        <div>{{questions[i].option2}}</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
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
      refreshDialog: false,
      panel: [],
      radios: [], 
      questions: [
        {
          contents: "선호하는 식단을 선택해주세요.",
          option1: "저염, 고단백, 저지방식 위주 식단 만들기", 
          option2: "상관없음", 
          option1_prop: "A", 
          option2_prop: "E", 
        },   
        {
          contents: "선호하는 식단을 선택해주세요.",
          option1: "지난 일주일동안 먹은 음식들을 추가로 입력해서 더 정교한 식단 추천을 받기 원한다.", 
          option2: "회원가입시 입력한 정보만을 통해 추천 받기 원한다.", 
          option1_prop: "B", 
          option2_prop: "D", 
        },   
        {
          contents: "선호하는 식단을 선택해주세요.",
          option1: "다른 사람들의 식단 참고해서 식단 구성", 
          option2: "다른 사람의 식단 참고 X", 
          option1_prop: "C", 
          option2_prop: "A", 
        },      
      ],


      activator: null,
      attach: null,
      colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
      editing: null,
      index: -1,
      items: [
        { header: '알러지에 대한 정보를 입력함으로써 추가하실 수 있습니다.' },
        {
          text: '새우',
          color: 'blue',
        },
        {
          text: '오이',
          color: 'red',
        },
      ],
      nonce: 1,
      menu: false,
      model: [
        {
          text: '오이',
          color: 'red',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }),

    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1],
            }

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      },
    },

    mounted() {
      this.init();
    },

    methods: {
      edit (index, item) {
        if (!this.editing) {
          this.editing = item
          this.index = index
        } else {
          this.editing = null
          this.index = -1
        }
      },
      filter (item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
      init () {
        for(let i = 0; i < 3; i++){
          this.panel.push(i);
        }
        
        //console.log(this.panel);
      },
      refresh(){
        this.radios = [];
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
        this.$router.push('./weeks/1');
        //console.log("carculateResult");
      },
    },
  }
</script>

