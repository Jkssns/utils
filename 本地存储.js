
const storage = {
    /* localStorage */
    ls: {
        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            const obj = localStorage.getItem(key)
            if (obj) {
                return JSON.parse(obj)
            } else {
                return null
            }
        },
        remove() {
            localStorage.removeItem(key)
        },
        clear() {
            localStorage.clear()
        }
    },
    /* sessionStorage */
    ss: {
        set(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            const obj = sessionStorage.getItem(key)
            if (obj) {
                return JSON.parse(obj)
            } else {
                return null
            }
        },
        remove() {
            sessionStorage.removeItem(key)
        },
        clear() {
            sessionStorage.clear()
        }
    }
}
export default storage;

  