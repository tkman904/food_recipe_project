<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center">게시판</h3>
            <table class="table">
                <tbody>
                    <tr>
                        <td class="text-left">
                            <a href="/board/insert" class="btn btn-xs btn-warning">새 글</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <thead>
                    <tr class="danger">
                        <th class="text-center" width="10%">번호</th>
                        <th class="text-center" width="45%">제목</th>
                        <th class="text-center" width="15%">이름</th>
                        <th class="text-center" width="20%">작성일</th>
                        <th class="text-center" width="10%">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(vo, key) in board_list.list" :key="key" class="dataTr" @click="goDetail(vo.no)">
                        <td class="text-center" width="10%">{{vo.no}}</td>
                        <td width="45%" class="text-left">{{vo.subject}}</td>
                        <td class="text-center" width="15%">{{vo.name}}</td>
                        <td class="text-center" width="20%">{{vo.dbday}}</td>
                        <td class="text-center" width="10%" v-text="vo.hit"></td>
                    </tr>
                    <tr>
                        <td colspan="5" class="text-center">
                            <a href="#" class="btn btn-sm btn-info">이전</a>
                            {{board_list.curpage}} page / {{board_list.totalpage}} pages
                            <a href="#" class="btn btn-sm btn-info">다음</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// use => hook => 자동 처리 함수
const store = useStore()
const router = useRouter()
const board_list = computed(()=> store.state.boards.board_list)

onMounted(()=> {
    store.dispatch('boards/boardListData', 1)
})

const goDetail = (no)=> {
    router.push(`/board/detail/${no}`)
}
</script>
<style scoped>
.row {
    margin: 0px auto;
    width: 800px;
}
.dataTr:hover {
    cursor: pointer;
    background-color: coral;
}
</style>