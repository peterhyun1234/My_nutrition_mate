<template>
  <v-app id="inspire">
    <v-container grid-list-xl>
      회원가입
    </v-container>
  </v-app>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function(user){
          alert("회원가입 완료!");
        },
        function(err){
          alert("회원가입 에러" + err.message);
        }
      );
    }
  }
}
</script>

