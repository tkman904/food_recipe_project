<template>
    <div class="container">
        <div class="row">
            <h3 class="text-center">글쓰기</h3>
            <table class="table">
                <tbody>
                    <tr>
                        <th width="15%" class="text-center">이름</th>
                        <td width="85%" class="text-left">
                            <input type="text" size="20" class="input-sm" ref="uname">
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">제목</th>
                        <td width="85%" class="text-left">
                            <input type="text" size="20" class="input-sm" ref="subject">
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">내용</th>
                        <td width="85%" class="text-left">
                            <textarea rows="10" cols="60" ref="content"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th width="15%" class="text-center">비밀번호</th>
                        <td width="85%" class="text-left">
                            <input type="password" size="10" class="input-sm" ref="pwd">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-center">
                            <button type="button" class="btn-sm btn-primary" @click="submit()">글쓰기</button>
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
    import { ref } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    const store = useStore()
    const router = useRouter()

    const uname = ref(null)
    const subject = ref(null)
    const content = ref(null)
    const pwd = ref(null)

    const submit = async()=> {
        if(uname.value.value === "") {
            uname.value.focus()
            return
        }
        if(subject.value.value === "") {
            subject.value.focus()
            return
        }
        if(content.value.value === "") {
            content.value.focus()
            return
        }
        if(pwd.value.value === "") {
            pwd.value.focus()
            return
        }
        await store.dispatch('boards/boardInsert', {
            name: uname.value.value,
            subject: subject.value.value,
            content: content.value.value,
            pwd: pwd.value.value
        })
        router.push("/board/list")
    }
</script>
<style scoped>
    .row {
        margin: 0px auto;
        width: 800px;
    }
</style>