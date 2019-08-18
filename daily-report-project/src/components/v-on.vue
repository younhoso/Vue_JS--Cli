<template>
    <div>
        <!-- v-on: 이벤트 -->
        <button @click="undateScore(1)">클릭하세요</button>
        <!-- 
            v-on: 이벤트.수식어 종류 
            .stop
            .prevent
            .capture
            .self
            .once
        -->

        <input @keyup.enter="keyup">
        <!-- 
            v-on:이벤트.키수식어 종류 
            .enter
            .tab
            .delete (“Delete” 와 “Backspace” 키 모두를 캡처합니다)
            .esc
            .space
            .up
            .down
            .left
            .right
        -->
        
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
            undateScore(score) {
                console.log('score');
            },
            keyup() {
                console.log('key');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>