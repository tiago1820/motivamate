import Quote from './components/Quote/Quote';
import quotes from './data';
import './App.css';

function App() {

    const randomNumber = (quotes) => {
        return Math.floor(Math.random() * quotes.length);
    }

    const num = randomNumber(quotes);

    return (
        <Quote 
            quote={quotes[num].quote}
            author={quotes[num].author}
        />
    )
}

export default App;