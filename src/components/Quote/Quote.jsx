import styles from './Quote.module.css';

export default function Quote(props) {
    const { quote, author, setNum, randomNumber, quotes } = props;

    const handleClick = () => {
        setNum(randomNumber(quotes))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.quoteBox}>
                <div className={styles.quoteText}>
                    <i className='fa fa-quote-left'></i>
                    <span className={styles.spanText}>{quote}</span>
                </div>
                <div className={styles.quoteAuthor}>
                    -
                    <span className={styles.spanAuthor}>{author}</span>
                </div>
                <div className={styles.buttons}>
                    {/* <a href="#"><i className='fa fa-twitter'></i></a> */}
                    <button onClick={handleClick} className={styles.button}>New quote</button>
                </div>
            </div>
            <div className={styles.footer}>
                by
                <a href="#"> PT15b group</a>
            </div>

        </div>
    );
}
