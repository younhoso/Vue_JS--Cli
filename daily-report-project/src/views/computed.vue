<template>
  <div class="v-on">
    <Computed />
  </div>
</template>

<script>
  // @은 /src의 별칭이다.
  import Computed from '@/components/computed.vue';

  export default {

    components: {
      Computed
    }
  }
</script>