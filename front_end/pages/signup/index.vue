<template>
  <v-app id="inspire">
    <v-container>
      <v-row >
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
                label="Name"
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
<!-- 
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select> -->

            </v-form>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-title>
              알러지 증상이 있는 음식을 기입해주세요.
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
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-subtitle>
              평소 어지러움과 피로를 어느정도로 느끼시나요?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[0]" :mandatory="false" row>
              <v-radio label="전혀" value="radio-1"></v-radio>
              <v-radio label="조금" value="radio-2"></v-radio>
              <v-radio label="보통" value="radio-3"></v-radio>
              <v-radio label="많이" value="radio-4"></v-radio>
              <v-radio label="매우" value="radio-5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-subtitle>
              질병때문에 약을 복용하고 있습니까?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[1]" :mandatory="false" row>
              <v-radio label="전혀" value="radio-1"></v-radio>
              <v-radio label="조금" value="radio-2"></v-radio>
              <v-radio label="보통" value="radio-3"></v-radio>
              <v-radio label="많이" value="radio-4"></v-radio>
              <v-radio label="매우" value="radio-5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-subtitle>
              당뇨, 고혈압 등의 질병으로 식사를 조절하고 있습니까?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[2]" :mandatory="false" row>
              <v-radio label="전혀" value="radio-1"></v-radio>
              <v-radio label="조금" value="radio-2"></v-radio>
              <v-radio label="보통" value="radio-3"></v-radio>
              <v-radio label="많이" value="radio-4"></v-radio>
              <v-radio label="매우" value="radio-5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-subtitle>
              치아나 입 안의 상태가 좋지 않아서 음식을 먹기 힘드십니까?
            </v-card-subtitle>
            <v-radio-group v-model="Qradios[3]" :mandatory="false" row>
              <v-radio label="전혀" value="radio-1"></v-radio>
              <v-radio label="조금" value="radio-2"></v-radio>
              <v-radio label="보통" value="radio-3"></v-radio>
              <v-radio label="많이" value="radio-4"></v-radio>
              <v-radio label="매우" value="radio-5"></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="mt-5 mb-5 pa-3"
          >
            <v-card-subtitle>
              변비가 있거나 설사를 자주 하십니까?
            </v-card-subtitle>
            
            <v-radio-group v-model="Qradios[4]" :mandatory="false" row>
              <v-radio label="전혀" value="radio-1"></v-radio>
              <v-radio label="조금" value="radio-2"></v-radio>
              <v-radio label="보통" value="radio-3"></v-radio>
              <v-radio label="많이" value="radio-4"></v-radio>
              <v-radio label="매우" value="radio-5"></v-radio>
            </v-radio-group>
          </v-card>
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
      Qradios: ['radio-3', 'radio-3', 'radio-3', 'radio-3', 'radio-3',],

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
          text: '새우',
          color: 'blue',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }
  },

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
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function(user){
          alert("회원가입 완료!");
        },
        function(err){
          alert("회원가입 에러" + err.message);
        }
      );
      this.$router.push("./signin")
    }
  }
}
</script>

