import {useReducer} from "react"
import "../index.css"

//Target to learn how reducer works. Counter app increase numbers based on user clicks.
//https://dmitripavlutin.com/react-usereducer/

const initialState = {
    current: 0
}

export default function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState)
    
return(
    <div className="Counter--main">
        <h3 className="Counter--title">Reducer</h3>
        <h3 className = "Counter--value">{state.current}</h3>
        <div className = "Counter--buttons">
            <button onClick = {() => dispatch({type: "Add"})}>Add</button>
            <button onClick = {() => dispatch({type: "Reduce"})}>Reduce</button>

        </div>
    </div>
)
}

const reducer = (state, action) => {
switch(action.type){
    case "Add":
        return {...state, current: state.current +1 }
    case "Reduce":
        return {...state, current:state.current -1 }  
    default:
        throw new Error()      
}
}

