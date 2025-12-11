<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(vo, index) in food_data.list" :key="index">
                <div class="thumbnail">
                    <a href="#">
                        <img :src="vo.poster" :title="vo.address" style="width: 240px; height: 130px;">
                        <div class="caption">
                            <p>{{ vo.name }}</p>
                        </div>
                    </a>
                </div>
            </div>
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
    export default defineComponent({
        setup() {
            const store = useStore()
            const food_data = computed(()=> store.state.foods.food_data)
            // action함수 호출
            const foodListData = async(page)=> {
                await store.dispatch("foods/foodListData", page)
                console.log(food_data.value)
            }
            onMounted(()=> {
                foodListData(1)
            })
            return {
                food_data,
                foodListData
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
</style>