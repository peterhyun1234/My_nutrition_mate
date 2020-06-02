<template>
  <v-app id="inspire">
    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="mt-5 mb-10 pa-3"
          >
            <v-form
              ref="form"
              lazy-validation
            >
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

              <v-btn
                color="warning"
                @click="signIn"
              >
                로그인
              </v-btn>
            </v-form>
          </v-card>
          
          <v-card>
            asdasd
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          class="my-2"
          style="text-align: center;"
        >
        asdasd
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
    }
  },
  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user){
          alert("로그인 완료!");
          this.$router.push("/")
        },
        function(err){
          alert("로그인 에러" + err.message);
        }
      );
    }
  }
}
</script>

