<template>
  <div class="v-on">
    <Input />
  </div>
</template>

<script>
  // @은 /src의 별칭이다.
  import Input from '@/components/input.vue';

  export default {

    components: {
      Input
    }
  }
</script>