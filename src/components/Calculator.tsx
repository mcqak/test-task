import React, { useState } from 'react';

const Calculator = () => {
    const [numberX, setNumberX] = useState<number>(0);
    const [numberY, setNumberY] = useState<number>(0);
    const [calc, setCalc] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'firstNumber') {
            setNumberX(parseInt(event.target.value));
        } else {
            setNumberY(parseInt(event.target.value));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = fetch("http://localhost:8000/calculate", {
            method: 'POST',
            body: JSON.stringify({numberX, numberY}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            setCalc(data.calc)
        });        
    }


    return (
        <section className="calculator">
            <header>Calculator</header>
            <div className="form-wrapper">
                <h5>Enter the numbers</h5>
                <form onSubmit={handleSubmit}>
                    <input placeholder="number 1" type="number" id="firstNumber" name="firstNumber" onChange={handleChange}/>
                    <input placeholder="number 2" type="number" id="secondNumber" name="secondNumber" onChange={handleChange}/>
                    <button type="submit">Sum</button>
                </form>
                <hr/>
                <div className="results">
                    <h5>Results</h5>
                    <div className="results-number">
                        {calc}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator
