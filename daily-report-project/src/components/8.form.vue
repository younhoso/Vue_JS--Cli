<template>
    <div>
         <p>{{msg}}</p>
        <input type="text" v-model="msg" placeholder="입력하세요" />
        <input type="checkbox" v-model="seen" />
        <p>{{seen}}</p>

        <input type="radio" v-model="age" value="30">
        <input type="radio" v-model="age" value="20">
        <input type="radio" v-model="age" value="10">
        <p>선택:{{age}}</p>

        <select v-model="age">
            <option value="30">30</option>
            <option value="20">20</option>
            <option value="10">10</option>
        </select>
    </div>
    <!-- 하나의 데이터 값으로 여러게의 form을 제어할수 있고, 반대로 form으로 데이터를 제어 할수 있다. -->
</template>

<script>
    export default {
        data() {
            return {
                score: 0,
                msg: '반갑습니다.',
                author: 'bob',
                age: 20,
                seen: false
            }
        },
        beforeCreate(){
            console.log('beforCreate');
            console.log(this.score);
        },
        created(){
            console.log('create');
            console.log(this.score);
        },
        beforeMount() {
            console.log('beforMount');
            console.log(this.score);
        },
        mounted(){
            console.log('mounted');
            console.log(this.score);
        },
        beforUpdate(){
            console.log('beforUpdate');
        },
        update() {
            console.log('update');
        },
        beforDestroy(){
            console.log('beforDestroy');
        },
        destroyed(){
            console.log('destroyed');
        },
    }
</script>

<style lang="scss" scoped>

</style>