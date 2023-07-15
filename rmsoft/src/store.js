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

export default configureStore({
  reducer: { 
    intro : intro.reducer
  }
}) 