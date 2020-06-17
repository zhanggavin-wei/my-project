import fetch from '@/utils/fetch'

const songModule = {
    namespaced: true,
    state: {
        songMsg: 1001,
        songList: []
    },
    getters: {},
    mutations: {
        updateSongList(state, payload) {
            state.songList = payload
        }
    },
    actions: {
        // 在actions中与后端API进行数据交互
        // 这是异步的，当拿到数据时使用mutations方法把数据赋值给state
        // 在组件中就可以使用mapState来使用后端给的数据了
        getQQMusic(store, payload) {
            fetch({
                url: '/soso/fcgi-bin/client_search_cp',
                method: 'GET',
                params: payload
            }).then(res => {
                store.commit('updateSongList', res.song.list)
            })
        }
    }
}
export default songModule