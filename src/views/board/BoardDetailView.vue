<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center">내용보기</h3>
            <table class="table">
                <tbody>
                    <tr>
                        <th width="20%" class="text-center danger">번호</th>
                        <td width="30%" class="text-center" v-text="vo.no"></td>
                        <th width="20%" class="text-center danger">작성일</th>
                        <td width="30%" class="text-center" v-text="vo.dbday"></td>
                    </tr>
                    <tr>
                        <th width="20%" class="text-center danger">이름</th>
                        <td width="30%" class="text-center" v-text="vo.name"></td>
                        <th width="20%" class="text-center danger">조회수</th>
                        <td width="30%" class="text-center" v-text="vo.hit"></td>
                    </tr>
                    <tr>
                        <th width="20%" class="text-center danger">제목</th>
                        <td colspan="3" v-text="vo.subject"></td>
                    </tr>
                    <tr>
                        <td colspan="4" valign="top" class="text-left" height="250">
                            <pre
                                style="white-space: pre-wrap; background-color: white; border: none;">{{vo.content}}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-right">
                            <button class="btn btn-xs btn-info" @click="goUpdate()">수정</button>
                            <button class="btn btn-xs btn-warning" @click="goDelete()">삭제</button>
                            <button type="button" class="btn btn-xs btn-success" @click="goList()">목록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const vo = computed(()=> store.state.boards.board_detail)

    onMounted(()=> {
        store.dispatch("boards/boardDetailData", route.params.no)
    })
    
    const goList = () => {
        router.push("/board/list")
    }
    // PathValiable
    const goUpdate = () => {
        router.push(`/board/update/${route.params.no}`)
    }
    /*
        {
            path: "/board/detail/:no",
            name: "board_detail",

        }
        == 여러개 : routes ==> 관리 router
     */
    // const no = route.params.no
</script>
<style scoped>
.row {
	margin: 0px auto;
	width: 800px;
}
</style>