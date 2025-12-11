<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tbody>
                    <tr>
                        <td width="30%" class="text-center" rowspan="8">
                            <img :src="vo.poster" style="width: 220px; height: 300px;">
                        </td>
                        <td colspan="2">
                            <h3>{{vo.name}}&nbsp;<span style="color: orange;">{{vo.score}}</span></h3>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">주소</td>
                        <td width="55%">{{vo.address}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">전화</td>
                        <td width="55%">{{vo.phone}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">음식종류</td>
                        <td width="55%">{{vo.type}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">가격대</td>
                        <td width="55%">{{vo.price}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">영업시간</td>
                        <td width="55%">{{vo.time}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">주차</td>
                        <td width="55%">{{vo.parking}}</td>
                    </tr>
                    <tr>
                        <td class="text-center" style="color: gray; width: 15%;">테마</td>
                        <td width="55%">{{vo.theme}}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <tr>
                    <td>{{vo.content}}</td>
                </tr>
                <tr>
                    <td class="text-right">
                        <a href="/" class="btn btn-sm btn-primary">목록</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const store = useStore();
    // vuex => state => 데이터 읽기
    const vo = computed(()=> store.state.foods.food_detail)
    onMounted(()=> {
        store.dispatch("foods/foodDetailData", route.params.fno)
    })
</script>
<style scoped>
    .row {
        margin: 0px auto;
        width: 960px;
    }
</style>