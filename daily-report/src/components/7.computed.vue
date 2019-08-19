<template>
    <div>
        <!-- 
            지속적인 연산, 계산이 필요한 데이터 표현(동적으로 변하는 데이터 표현)
            템플릿에서 데이터, props와 사용법 동일, 스크립트에서 function 형태로 작성
            watch보다 간편
        -->
        <h2>오늘: {{today}}</h2>
        <button @click="undateScore(2)">클릭하세요</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: 0
            }
        },
        computed: {
            today() {
                // let date = new Date();
                // return date.getDate();
                return this.score + 1
            }
        },
        methods:{
            undateScore(score) {
                this.score = score;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>