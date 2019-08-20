<template>
    <div class="day">
        <h1 class="day-title">
            {{$route.params.date}}
        </h1>
        <ul class="day-list">
            <li v-for="item in items" :key="item.id" class="day-list-item">
                <div class="tiem">
                    <h2>{{item.id}}</h2>
                </div>
                <div class="action">
                    <input type="text" v-model="item.action" placeholder="한 일을 작성해주세요">
                </div>
                <dayScore @onUpdateScore="onUpdateScores" :item="item"/>
                <div class="note">
                    <textarea v-model="item.note" placeholder="노트를 작성해 주세요">
                    </textarea>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    import DayScore from './DayScore';
    export default {
        name: 'Day',
        methods: {
            onUpdateScores(item, score){
                item.score = score;
            }
        },
        computed: {},
        components: {
            DayScore
        },
        data() {
            return {
                items: [
                    {
                        id: '2019-04-01-08-10',
                        action:'',
                        note: '',
                        open: 'false',
                        score: undefined
                    },
                    {
                        id: '2019-04-01-10-12',
                        action:'',
                        note: '',
                        open: 'false',
                        score: undefined
                    },
                    {
                        id: '2019-04-01-12-14',
                        action:'',
                        note: '',
                        open: 'false',
                        score: undefined
                    },
                ]
            }
        },
        props: {}
    }
</script>