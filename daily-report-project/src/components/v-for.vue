<template>
    <div>
        <ul>
            <li v-for="(item) in items" :key="item.id">
                {{item.name}} - {{item.age}}
                 <p>{{item.title}}</p>
            </li>
        </ul>
        <ul>
             <li v-for="(val, key, index) in persons" :key="index">
                {{val}} - {{key}} - {{index}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items : [
                    {id: 1, name: 'red', age: '15', title: 'Do the dishes',},
                    {id: 2, name: 'blue', age: '25', title: 'Take out the trash',},
                    {id: 3, name: 'green', age: '20', title: 'Mow the lawn'},
                    {id: 3, name: 'yeelow', age: '60', title: 'Do the dishes'},
                ],

                persons: {
                    name: 'bob',
                    age: '25',
                    location: 'seoul'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

