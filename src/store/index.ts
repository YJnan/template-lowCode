import { createStore } from 'vuex'
// ts 中接口数据
interface State {
  userName: string,
  taskList: any[]
}

let state: State = {
    userName: "小仙女",
    taskList: []
}

export default createStore({
    state,
});