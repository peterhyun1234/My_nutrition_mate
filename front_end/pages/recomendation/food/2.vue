

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
                    추천된 메뉴
                  </p>
                  <v-img 
                    src="https://i.imgur.com/L6R0QM4.png" 
                    aspect-ratio="0.88"
                    max-height="800"
                    contain
                  ></v-img>
                  <v-divider class="mt-5"></v-divider>
                  <v-card-title class="mb-5">
                    닭 가슴살 야채 볶음밥
                  </v-card-title>

                  <v-card-subtitle >
                    "담백한 닭가슴살을 넣은 고소한 야채볶음밥 "
                  </v-card-subtitle>
                  <v-divider class="mt-2"></v-divider>
                  <v-card-title class="mb-5">
                    영양 정보 (1인분 기준 - 250g)
                    
                  </v-card-title>

                  <v-card-subtitle>
                    -- 360 kcal
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 탄수화물 46.00g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 설탕당 2.00g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 단백질 31.00g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 지방 6.00g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 포화지방 2.700g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 트랜스 지방 0.000g
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 콜레스테롤 155mg
                  </v-card-subtitle>
                  <v-card-subtitle>
                    -- 나트륨 290mg
                  </v-card-subtitle>
                  
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
  components: {
  },
  data () {
    return {
    }
  },

  mounted() {

    // var myHeaders = new Headers();
    // myHeaders.append("session", "dummy");
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify([{"id":"dummy","value":"dummy"}]);

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("http://110.15.89.125:8080/recommendation/weeks", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    // var myHeaders = new Headers();
    // myHeaders.append("session", "dummy");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch("http://110.15.89.125:8080/recommendation", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

  },
}
</script>

