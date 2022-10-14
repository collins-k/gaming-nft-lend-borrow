export const setToStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
        return window.localStorage.setItem(key, value)
    }
}

export const getFromStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key)
    }
}
