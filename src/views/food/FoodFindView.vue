<template>
    <div class="container">
        <div class="row">
            <select class="input-sm" v-model="column">
                <option value="all">전체</option>
                <option value="address">주소</option>
                <option value="name">업체명</option>
                <option value="type">음식종류</option>
            </select>
            <input type="text" size="20" class="input-sm" v-model="ss">
            <button class="btn-sm btn-danger" @click="find()">검색</button>
        </div>
        <div class="row" style="margin-top: 20px;">
            <div class="col-md-3" v-for="(vo, index) in find_data.list" :key="index">
                <div class="thumbnail">
                    <router-link :to="{name:'food_detail',params:{fno:vo.fno}}">
                        <img :src="vo.poster" :title="vo.address" style="width: 240px; height: 130px;">
                        <div class="caption">
                            <p>{{ vo.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row text-center" style="margin-top: 20px;">
            <ul class="pagination">
                <li v-if="find_data.startPage > 1"><a class="a-link" @click="foodFindData(column, find_data.startPage-1, ss)">&laquo;</a></li>
                <li v-for="i in range(find_data.startPage, find_data.endPage)" :key="i" :class="find_data.curpage == i ? 'active' : ''">
                    <a class="a-link" @click="foodFindData(column, i, ss)">{{ i }}</a>
                </li>
                <li v-if="find_data.endPage < find_data.totalpage"><a class="a-link" @click="foodFindData(column, find_data.endPage+1, ss)">&raquo;</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    /*
        Controller = router/index.js
                        | food.js = index.js = store에 저장
                        | 변수 = state
        main.html = public/index.html
            | include : App.vue
        home.html = Home.vue
        header.html = Header.vue

        화면 UI
            |
        이벤트 = 메뉴클릭 / 버튼클릭
            |
        food.js / recipe.js
            |
        store = state변수에 저장
            |
        해당 vue에서 store에 있는 state를 읽어서 출력
     */
    import { defineComponent, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import { ref } from 'vue';

    export default defineComponent({
        setup() {
            const ss = ref("")
            const column = ref("all") // v-model과 연결되는 변수
            const store = useStore()
            const find_data = computed(()=> store.state.foods.find_data)
            // action함수 호출
            const foodFindData = async(column, page, ss)=> {
                await store.dispatch("foods/foodFindData", {column, page, ss})
                console.log(find_data.value)
            }
            onMounted(()=> {
                foodFindData('all', 1, null)
            })
            return {
                find_data,
                foodFindData,
                ss,
                column
            }
        },
        methods: {
            find() {
                this.foodFindData(this.column, 1, this.ss)
            },
            range(start, end) {
                const len = end-start
                const arr = []
                for(let i=0;i<=len;i++) {
                    arr[i] = start
                    start++
                }
                return arr
            }
        }
    })
</script>
<style scoped>
    .row {
        margin: 0px auto;
        width: 960px;
    }

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .a-link:hover {
        cursor: pointer;
    }
</style>