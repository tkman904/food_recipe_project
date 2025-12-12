import { createStore } from "vuex";
import foods from "./food"
import boards from "./board"

export default createStore({
    modules: {
        foods,
        boards
    }
})