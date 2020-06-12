<template>
  <v-app id="inspire">
    <v-container grid-list-xl>
      <v-card>
        <v-avatar 
          color="#FFE0B2" 
          size="50"
          >
          <v-icon 
            color="#FFA726"
            >mdi-sprout-outline</v-icon>
        </v-avatar>
        <p class="headline text--primary ma-5">
          커뮤니티
        </p>
        <p class="subheading text--primary ma-2">
          커뮤니티 가벼운 소통 도구로, 여러 사용자가 <strong>다양한 방법으로 소통</strong>할 수 있도록 해 줍니다. 
          다양한 콘텐츠 유형을 통해 <strong>서로 시너지를 발휘해서 건강관리</strong>를 재밌게 할 수 있습니다!
        </p>
        <v-divider></v-divider>
        <p class="subheading text--primary ma-3">
          나와 <strong>비슷한 사람의 식단</strong>을 찾아보고! 비교하고 싶다면?!
        </p>
        
        <v-btn
          text
          color="deep-purple accent-4"
          to="/community"
        >
          <strong>더 알아보기</strong>
        </v-btn>
      </v-card>
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
}
</script>

