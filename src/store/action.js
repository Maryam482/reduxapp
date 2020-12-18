export const increment = 'INCREMENT'
export const decrement = 'DECREMENT'

export function inAction(){
    return{
        type: increment
    }
}

export function decAction(){
    return{
        type: decrement
     }
}