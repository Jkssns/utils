import Vue from 'vue'

/***
 *  @dec    防抖 单位时间只触发最后一次
 *  @param {String}   type   - 当前元素类型
 *  @param {Function} fn     - 执行事件
 *  @param {String}   event  - 事件类型 例："keydown"
 *  @param {Number}   time   - 间隔时间
 *  @param {Array}    binding.value - [fn,event,time,type]
 *  例：<el-input v-debounce="[queryList,`keydown`,300,'input']" />
 */
Vue.directive('debounce', {
    inserted: function(el, binding) {
        let [fn, event = "keydown", time = 300, type = 'input'] = binding.value
        const targetEl = el.getElementsByTagName(type)[0];
        let timer
        targetEl.addEventListener(event, () => {
            timer && clearTimeout(timer)
            timer = setTimeout(() => fn(targetEl.value), time)
        })
    }
});