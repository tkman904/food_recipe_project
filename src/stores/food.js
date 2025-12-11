import axios from "axios";
/*
    FoodVO => {}
    Map => {}
    List => []
    yes / no = msg : ''
    1, 2 .. = num : 0
    true / false = bool : false
    NUMBER = int
    VARCHAR2 = String
 */
export default {
    namespaced: true,
    // 서버에서 전송하는 데이터를 저장하는 변수
    // 변경이 가능한 변수 => state
    // 변경이 불가능한 변수 => prop
    state: {
        food_data: {}, // Map
        food_detail: {} // VO
    },
    // 수정, 삭제, 추가 ..
    mutations: {
        SET_FOOD_DATA(state, payload) {
            state.food_data = payload
        }
    },
    // 서버와 연결 => 요청 담당
    actions: {
        async foodListData({commit}, page) {
            console.log('foodListData Call: '+page)
            // 서버연결
            await axios.get('http://localhost/main_vue/', {
                params: {page}
            }).then(response=> {
                console.log(response.data)
                commit('SET_FOOD_DATA', response.data)
                // this.food_data = response.data
            })
        }
    }
}