
import React, { useState } from 'react'

const Dispaly = () => {
    const [input, setInput] = useState("")
    const handler = (e) => {
        setInput(e.target.value)
    }
    const [result, setResult] = useState(0)
    return (
        <div>

            <h1>Calculator</h1>
            <input type="text" onChange={handler} value={input} name="input" />
            <button type="button" value={result} onClick={() => setResult(eval(input))}> Result</button>
            <h2> Result:{result}</h2><br />

            <button type="button" onClick={() => setInput(input + '1')}> 1</button>
            <button type="button" onClick={() => setInput(input + '2')}> 2</button>
            <button type="button" onClick={() => setInput(input + '3')}> 3</button>
            <button type="button" onClick={() => setInput(input + '4')}> 4</button>
            <button type="button" onClick={() => setInput(input + '5')}> 5</button><br />
            <button type="button" onClick={() => setInput(input + '6')}> 6</button>
            <button type="button" onClick={() => setInput(input + '7')}> 7</button>
            <button type="button" onClick={() => setInput(input + '8')}> 8</button>
            <button type="button" onClick={() => setInput(input + '9')}> 9</button>
            <button type="button" onClick={() => setInput(input + '0')}> 0</button><br />
            <button type="button" onClick={() => setInput(input + '+')}> +</button>
            <button type="button" onClick={() => setInput(input + '-')}> -</button>
            <button type="button" onClick={() => setInput(input + '*')}> *</button>
            <button type="button" onClick={() => setInput(input + '/')}> /</button>
            <button type="button" onClick={() => setInput('')}> clr</button>


        </div>
    )
}

export default Dispaly
