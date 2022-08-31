import {reducer, SET_OPPOSITION_BOOLEAN, StateType} from "./reducer";


test('reducer converted to opposit value', ()=> {

    const  state: StateType = {
        collapsed: false
    }
  const  newState =  reducer(state, {type: SET_OPPOSITION_BOOLEAN})


   expect(newState.collapsed).toBe(true)
})