import { useState } from "react";
import Products from "./Products";
import Pagination from "./Pagination";

const Quiz = ({ questions, products}) => {
    
    const initialAnswers = {};

    for (let i = 0; i < questions.length; i += 1) {
        initialAnswers[i] = null;
    }
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);

    const {question, choises} = questions[currentQuestion];

    const [answerIdx, setAnswerIdx] = useState(null);
    const onAnswerClick = (answer, index) => {
        setCurrentAnswers({
            ...currentAnswers,
            [currentQuestion]: index,
        });
        setAnswerIdx(index);
    }

    const [result, setResult] = useState(false);

    const onClickNext = () =>  {
        setAnswerIdx(null);
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(0);
            setResult(true);
        }
    }

    const onClickPrev = () => {
        setAnswerIdx(null);
        if (currentQuestion !== questions.length) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        {!result ? (
        <div className='container'>
            <h1>Онлайн-подбор средств для лица</h1>
            <p className='description'>Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов</p>
            
            <div className='quiz-container'>
                <div>
                    <div>
                        <div className='dots'>
                            {questions.map((_, index) => (
                                <span className={currentQuestion === index ? 'dots__item dots__item--active' : 'dots__item'} key={index}></span>
                            ))}
                        </div>
                        <p className='number'>
                            Вопрос {currentQuestion + 1} из {questions.length}
                        </p>
                    </div>
                    <h2>{question}</h2>
                    <ul className='choises'>
                        {
                            choises.map((answer, index) => (
                                <li 
                                    onClick={() => onAnswerClick(answer, index)}
                                    key={answer}
                                    className={(currentAnswers[currentQuestion] === index) ? 'selected-answer' : null}
                                >
                                    {answer}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='buttons'>
                    <button onClick={onClickPrev} className={currentQuestion === 0 ? 'display-none' : 'btn btn--prev'}>
                        Назад
                    </button>
                    <button onClick={onClickNext} disabled={currentAnswers[currentQuestion] === null} className="btn btn--next">
                        {currentQuestion === questions.length - 1 ? 'Узнать результат' : 'Дальше'}
                    </button>
                </div>
                
            </div>
        </div>
        ) : 
        <div className='container'>
            <h1>Результат</h1>
            <p className='description'>Мы подобрали для вас наиболее подходящие средства</p>
            <div className='results-container'>
                <div className='cards'>
                    <Products products={currentProducts} />
                </div>
                <Pagination products={products} productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} setCurrentPage={setCurrentPage} />
            </div>
        </div>
        }
        </>
    )
}
export default Quiz;