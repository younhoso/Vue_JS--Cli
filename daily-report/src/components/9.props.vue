<template>
    <div>
        <!--props는 부모로부터 자식컴포넌트에게 전달되는 데이터 -->
        <h1>부모로 부터 받은 데이터: {{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'New',
        methods: {},
        computed: {},
        data() {
            return{}
        },
        props: {    //자식이 데이터를 props로 받는다.(object형식 또는 배열 형식으로) 
            msg: String
        }
    }
</script>

<style lang="scss" scoped>
</style>