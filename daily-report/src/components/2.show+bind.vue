<template>
  <div class="hello">
        <!-- v-if 이것은 엘리머트가 조건에 따라서 존자하거나, 없어지거나 한다. -->
        <p v-if="seen">보인다</p>
        <p v-else>보이지 않음</p>

         <!-- v-show 이것은 로드될 때 모든 엘리머트를 렌더링하고 조건에따라서 display: none; 처리가 된다. -->
        <p v-show="seen">show</p>
        <p v-show="!seen">not show</p>

        <!-- v-bind는 주소 및, 이미지 경로를 넣는다. -->
        <div>
            <a v-bind:href="url">google</a>
            <a :href="url">google</a>
        </div>
        <!-- v-bind는 주소 및, 이미지 경로를 넣는다. -->
        <div>
            <img v-bind:src="imgages" />
            <img :src="imgages" />
        </div>
        
        <!--  v-bind:href, v-bind:src 응용 -->
        <div>
            <a v-bind:href="url"><img v-bind:src="imgages" alt="이미지"></a>
            <a :href="url"><img :src="imgages" alt="이미지"></a>  <!-- :href :src 축양형 -->
        </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      seen: true,
      url: 'http://google.com',
      imgages: 'https://www.blugraphic.com/wp-content/uploads/2019/05/Isometric-Tablet-Mockup-.jpg',
    }
  }
}
</script>

<!-- "scoped"는 해당 component에만 제안적으로 적용이 된다. -->
<style scoped lang="scss">
</style>
