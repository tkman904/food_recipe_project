<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center">수정</h3>
            <table class="table">
                <tbody>
                    <tr>
                        <th width="15%" class="text-center">이름</th>
                        <td width="85%" class="text-left">
                            <input type="text" size="20" class="input-sm" ref="uname" v-model="board.name">
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">제목</th>
                        <td width="85%" class="text-left">
                            <input type="text" size="20" class="input-sm" ref="subject" v-model="board.subject">
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">내용</th>
                        <td width="85%" class="text-left">
                            <textarea rows="10" cols="60" ref="content" v-model="board.content"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">비밀번호</th>
                        <td width="85%" class="text-left">
                            <input type="password" size="10" class="input-sm" ref="pwd" v-model="board.pwd">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-center">
                            <button type="button" class="btn-sm btn-primary" @click="submit()">수정하기</button>
                            <button type="button" class="btn-sm btn-danger"
                                onclick="javascript:history.back()">취소</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from "vue";
    import { useStore } from "vuex";
    import { useRoute, useRouter } from "vue-router";
    // hooks => react
    /*
        JSP = MVC = Spring(Framework, Boot)
        Vue2  Vuex  Pinia               | nuxtjs
        React Redux tanStack-Query      | nextjs
                        |
                    NodeJS / TypeScript
        = 증거자료
        = 소스검증
     */
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const board = ref({})
    /* 
    const isPasswordRequired = computed(()=> {
        return board.value.pwd === 'yes'
    })
     */
    // mounted
    /*
        let arr = [1, 2, 3, 4, 5]
        let arr2 = [...arr, 6, 7, 8, 9]
     */
    onMounted(async()=> {
        await store.dispatch("boards/boardDetailData", route.params.no)

        // ... => 복제 (스코프 연산자)
        board.value = {
            ...store.state.boards.board_detail
        }
    })

    const submit = async()=> {
        await store.dispatch('boards/boardUpdate', {
            name: board.value.name,
            subject: board.value.subject,
            content: board.value.content,
            pwd: board.value.pwd,
            no: route.params.no
        })
        router.push(`/board/detail/${route.params.no}`)
    }
</script>
<style scoped>
    .row {
        margin: 0px auto;
        width: 800px;
    }
</style>