<template>
  <v-app id="inspire">
    <v-container grid-list-xl>
      <h3>Login</h3>
      <input type="text" placeholder="email"><br>
      <input type="password" placeholder="password"><br>
      <button>로그인</button>
      <p>계정이 없으면 회원가입을 진행해주세요</p>
    </v-container>
  </v-app>
</template>

<script>
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default {
  components: {
  },
  data () {
    return {
    }
  },
}


</script>

