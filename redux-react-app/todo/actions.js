export const addtodo = (id, text) => ({
    type: 'ADD_TODO',
    id,
    text
})

export const removetodo = (id) => ({
    type: 'REMOVE_TODO',
    id

})