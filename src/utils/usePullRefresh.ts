import {ref} from 'vue';

export function usePullRefresh() {
    const list = ref<(string | number)[]>([]);
    const loading = ref<boolean>(false);
    const finished = ref<boolean>(false);
    const refreshing = ref<boolean>(false);

    const onLoad = () => {
        setTimeout(() => {
            if (refreshing.value) {
                list.value = [];
                refreshing.value = false;
            }

            for (let i = 0; i < 10; i++) {
                list.value.push(list.value.length + 1);
            }

            loading.value = false;

            if (list.value.length >= 40) {
                finished.value = true;
            }
        }, 1000);
    };

    const onRefresh = () => {
        // 清空列表数据
        finished.value = false;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        loading.value = true;
        onLoad();
    };
    return {list, loading, finished, refreshing, onLoad, onRefresh};
}
