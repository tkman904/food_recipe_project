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

    vuex = pinia
    redux = react-query
            => 오픈 소스 => tanStack-Query
    ------------ MVC => Spring => Spring-Boot
    JDBC => MyBatis => JPA

    1. 중앙 집중적 저장소
                -------- 공유하는 데이터 : state
        state: {
            count: 0,
            food_list: [],
            food_detail: {},
            food_data: {},
            bool: false,
            name: ''
        }
        => 컴포넌트 (FoodListView.vue, ...) 어디서든 접근이 가능
        => state가 변경이 되면 자동으로 화면 UI가 자동 업데이트
        => store.state.count ... (호출)
    2. 수정, 삭제, 추가
        mutation: state를 변경할 수 있는 방법

        mutation: {
            increment(state) {
                state.count++
            }
            decrement(state) {
                state.count--
            }
        }
            => 동기적 함수
            => store.commit("increment")
            => store.commit("decrement")
                    -------- mutation함수 호출

        actions: 비동기적, mutation함수 호출
            => 서버와 통신 => 비동기적으로 작업 수행
            => 로직
                => axios : 서버에 요청
                    | fetch
                    | 결과값 읽기 then
                    | commit => mutation에 전송 => state에 저장
                                                    | 공유 사용이 가능
        state / mutation / actions => 동시 관리
            => store
        
    데이터 흐름
    => Component (화면출력) => actions
                            dispatch(action)
                                |
                            commit(mutation)
                                |
                                state
                                ------ UI 반영
    store : 모든 데이터를 관리하는 저장소
    action : 비동기 => 서버연결 => 데이터 읽기 => store
                                            | commit
                                        mutation
    mutation : 동기적으로 저장 => 유일하게 state변경이 가능
    state : 공유하는 데이터

    component =====> action =====> mutation =====> store
                |               |                   (state)
            dispatch           commit                   |
                                                state가 변경되면 화면 UI 적용
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
        },
        SET_FOOD_DETAIL(state, payload) {
            state.food_detail = payload
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
                // commit => mutation에 있는 함수 호출
            })
        },
        async foodDetailData({commit}, fno) {
            console.log("foodDetailData Call: "+fno)
            await axios.get("http://localhost/food/detail_vue/", {
                params: {fno}
            }).then(response=> {
                console.log(response.data)
                commit('SET_FOOD_DETAIL', response.data)
            })
        }
    }
}