<template>
    <div>
         <h1>{{score}}</h1>
        <button @click.once="undateScore(1)">클릭하세요</button>
        <input @keyup.enter="textKeyup">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: 0
            }
        },
        methods: {
            undateScore(score){
                this.score = score; // 컴포넌트 data에 대한 접근은 this.데이터명으로 합니다.
            },

            textKeyup(){
                console.log('enter');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>