import Quote from './components/Quote/Quote';
import quotes from './data';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

    const [num, setNum] = useState(0);

    const randomNumber = (quotes) => {
        return Math.floor(Math.random() * quotes.length);
    }

    useEffect(() => {
        setNum(randomNumber(quotes))
    }, [num])

    return (
        <Quote
            quote={quotes[num].quote}
            author={quotes[num].author}
            setNum={setNum}
            randomNumber={randomNumber}
            quotes={quotes}
        />
    )
}

export default App;