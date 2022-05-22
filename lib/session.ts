
export const session = {
    set: (name: string, object: object) => {
        localStorage.setItem(name, JSON.stringify(object))
    },
    get: (name: string) => {
        const obj = localStorage.getItem(name) as string
        return JSON.parse(obj)
    },
    delete: (name: string) => {
        localStorage.removeItem(name)
    }
};