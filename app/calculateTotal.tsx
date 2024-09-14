import { useState } from "react";

export default function CalculateTotal() {
    const [total, setTotal] = useState(0);
    const [inputValue, setInputValue] = useState<number>(0);

    const updateTotal = (amount: number) => {
        setTotal((prevTotal) => prevTotal + amount);
    };

    return (
        <div>
            <h2>Total: {total}</h2>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                placeholder="Enter a value"
            />
            <div>
                <button onClick={() => updateTotal(inputValue)}>Add</button>
                <button onClick={() => updateTotal(-inputValue)}>Subtract</button>
            </div>
        </div>
    );
}