import {useReducer} from "react"

//Target to learn how reducer works. Counter app increase numbers based on user clicks.
//https://dmitripavlutin.com/react-usereducer/

const initialState = {
    current: 0
}

export default function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState)
    
return(
    <div className = "Counter">
        <h3>{state.current}</h3>
        <button onClick = {() => dispatch({type: "Add"})}>Add</button>
    </div>
)
}

const reducer = (state, action) => {
switch(action.type){
    case "Add":
        return {...state, current: state.current +1 }
}
}

