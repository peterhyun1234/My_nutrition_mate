<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col style="text-align: center;">
          <v-card
            class="mt-5 mb-5 pa-3"
          >

          <v-avatar 
            color="#FFE0B2" 
            size="70"
            >
            <v-icon 
              color="#FFA726"
              large
              > mdi-ev-station</v-icon>
          </v-avatar>
          <p class="headline text--primary mt-5 mb-5">Create your account</p>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="이름"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-row>
                <v-col cols="4">
                  <v-subheader>나이</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    label="Age"
                    v-model="age"
                    suffix="세"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>몸무게</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    label="Weight"
                    v-model="weight"
                    suffix="kg"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader>키</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    label="Height"
                    v-model="height"
                    suffix="cm"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
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
                          알러지 반응이 있는 음식
                      </p>
                      <v-divider></v-divider>
                      <p class="subtitle-1 text--primary mt-3 ">
                          식단 추천은 <strong>회원가입 시 기입한 건강상태</strong>를 기반으로 합니다.</p>
                      <p class="subtitle-1 text--primary mt-3 ">
                          추가적으로 <strong>알러지 반응이 있는 음식</strong>들을 입력하면 보다 더 정교한 분석이 가능합니다!</p>
                      </v-card-text>
                      <v-divider></v-divider>
                  </v-flex>
                  <v-flex xs12 sm12 md12 class="mt-5 mb-5">
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
                  </v-flex>
              </v-layout>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              평소 어지러움과 피로를 어느정도로 느끼시나요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[0]" :mandatory="false" row>
              <v-radio label="전혀" value="1"></v-radio>
              <v-radio label="조금" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="많이" value="4"></v-radio>
              <v-radio label="매우" value="5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              다리에 쥐가 자주 나시나요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[1]" :mandatory="false" row>
              <v-radio label="전혀" value="1"></v-radio>
              <v-radio label="조금" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="많이" value="4"></v-radio>
              <v-radio label="매우" value="5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              호흡 곤란 증세를 겪은 적이 있으신가요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[2]" :mandatory="false" row>
              <v-radio label="전혀" value="1"></v-radio>
              <v-radio label="조금" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="많이" value="4"></v-radio>
              <v-radio label="매우" value="5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              차나 커피를 평소에 얼마나 마시나요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[3]" :mandatory="false" row>
              <v-radio label="전혀" value="1"></v-radio>
              <v-radio label="조금" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="많이" value="4"></v-radio>
              <v-radio label="매우" value="5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              혈압 수치가 어느정도인지 아시나요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[4]" :mandatory="false" row>
              <v-radio label="모름" value="1"></v-radio>
              <v-radio label="낮음" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="높음" value="4"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3 flex-center"
          >
            <v-card-subtitle>
              변비가 있거나 설사를 자주 하십니까?
            </v-card-subtitle>
            
            <v-radio-group v-model="Qradios[5]" :mandatory="false" row>
              <v-radio label="전혀" value="1"></v-radio>
              <v-radio label="조금" value="2"></v-radio>
              <v-radio label="보통" value="3"></v-radio>
              <v-radio label="많이" value="4"></v-radio>
              <v-radio label="매우" value="5"></v-radio>
            </v-radio-group>
          </v-card>
          <!-- <v-btn
            color="success"
            large
            @click="axiosTest"
          >
            axiosTest
          </v-btn> -->
          <v-btn
            color="warning"
            large
            @click="signUp"
          >
            가입하기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

var firebaseConfig = {
    apiKey: "AIzaSyC5zhSCHySnmcGc09IR-iATPEj9LAm1ER4",
    authDomain: "oauthtest-265805.firebaseapp.com",
    databaseURL: "https://oauthtest-265805.firebaseio.com",
    projectId: "oauthtest-265805",
    storageBucket: "oauthtest-265805.appspot.com",
    messagingSenderId: "931210459156",
    appId: "1:931210459156:web:b12845fd52ff2c7d4f8f01",
    measurementId: "G-N0Q217TG2M"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default {
  components: {
  },
  data () {
    return {

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


      Qradios: ['3','3','3','3','3','3',],

      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      show1: false,
      passwordRules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },

      age: 0,
      height: 0,
      weight: 0
    }
  },

  updated() {
    //console.log("updated");
    //console.log(this.selected[0].name);
  },
  
  methods: {

    axiosTest(){
      console.log(this.age)
      console.log(this.height)
      console.log(this.weight)
      //console.log(this.selected)
      console.log(this.Qradios)

      const url = `http://15.164.225.191:3000/users`;

      let sendingData = [
            { id: "name", value: ""},
            { id: "age", value: 0},
            { id: "weight", value: 0},
            { id: "height", value: 0},
            { id: "allergy", value: []},
            { id: "question1", value: 3},
            { id: "question2", value: 3},
            { id: "question3", value: 3},
            { id: "question4", value: 3},
            { id: "question5", value: 3},
            { id: "question6", value: 3}
      ]

      sendingData[0].value = this.name
      sendingData[1].value = this.age
      sendingData[2].value = this.weight
      sendingData[3].value = this.height

      for(let i = 0; i < this.selected.length; i++){
        sendingData[4].value.push(this.selected[i].name)
        console.log(this.selected[i].name) 
      }

      for(let i = 0; i < this.Qradios.length; i++){
        sendingData[i + 5].value = this.Qradios[i]
      }

      console.log(sendingData)

      // fetch(url, {
      //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // })
      // .then(function(response) {
      //     return response.json();
      // }).then(function(json) {
      //     //console.log(json.data);
      //     const returnObj = JSON.stringify(json.data);
      //     boxContainer.innerText = `${returnObj}`;
      // });



      // fetch(url, {
      //   method: 'POST', // or 'PUT'
      //   body: JSON.stringify(this.Qradios), // data can be `string` or {object}!
      //   headers: {
      //         'Content-Type': 'application/json'
      //     }
      // }).then(function(response) {
      //     console.log(response);
      //     return response.json();
      // }).then(function(json) {
      //     console.log(json);
      //     const returnObj = JSON.stringify(json);
      //     boxContainer.innerText = `${returnObj}`;
      // });

      // axios.get('http://15.164.225.191:3000/users')
      
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      // });

    },
    questionCompleted(){

      //console.log(this.age)
      //console.log(this.height)
      //console.log(this.weight)
      //console.log(this.selected)
      //console.log(this.Qradios)



      
      // if(){

      // }

      return false
    },
    signUp(){

      if(this.questionCompleted()){

      }
      else{
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function(user){
            alert("회원가입 완료!");
          },
          function(err){
            alert("회원가입 에러" + err.message);
          }
        );
      }

      this.$router.push("./signin")
    }
  }
}
</script>

<style>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
