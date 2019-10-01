export function add(payload, type) {
    return {
        type,
        payload
    }
}

export function del(payload, type) {
    return {
        type,
        payload
    }
}