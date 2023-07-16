import { configureStore, createSlice } from '@reduxjs/toolkit'

let intro = createSlice({
    name : 'intro',
    initialState : 1,
    reducers : {
        changeIntro(state){
            sessionStorage.setItem('intro',1)
            return(
                0
            )
        }
    }
})

export let { changeIntro } = intro.actions

let wheel = createSlice({
    name : 'wheel',
    initialState : 0,
    reducers : {
        wheelDown(state){
            state++
            console.log()
            if(state >= 6) state = 6
            return state
        },
        wheelUp(state){
            state--
            if(state <= 0) state = 0
            return state
        }
    }
})

export let { wheelDown, wheelUp } = wheel.actions





export default configureStore({
  reducer: { 
    intro : intro.reducer,
    wheel : wheel.reducer
  }
}) 