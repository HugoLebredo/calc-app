/* eslint no-eval:0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.length > 0 ? items[items.length-1]: '0'

    const onClickHandlerNumber = number => {
        setStack(`${stack}${number}`)
    };

    const onClickOperationFunction = operation => setStack(`${stack}${operation}`);

    const onClickEqualFunction = () => setStack(eval(stack).toString());

    const onContentClearFunction = () => setStack("");

    const onDeleteFunction = () => { 
        if (stack.length > 0)
        {
            const newStack = stack.substr(0,stack.length - 1)
            setStack(newStack)
        }
    };

    return (
        <main className = 'react-calculator'>
            <Result value = {value}/>
            <Numbers onClickNumber = {onClickHandlerNumber} />
            <Functions onContentClear = {onContentClearFunction}
                        onDelete = {onDeleteFunction}/>
            <MathOperations onClickEqual = {onClickEqualFunction} 
                                onClickOperation = {onClickOperationFunction}/>
        </main>
    )
}
export default App
