import Quote from './components/Quote/Quote';
import quotes from './data';
import './App.css';
import { useState } from 'react';

function App() {

    const randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    const [num, setNum] = useState(() => randomNumber(quotes.length));
    
    const updateNum = () => {
        setNum(randomNumber(quotes.length));
    }
    
    return (
        <Quote 
            quote={quotes[num].quote}
            author={quotes[num].author}
            updateNum={updateNum}
        />
    )
}

export default App;