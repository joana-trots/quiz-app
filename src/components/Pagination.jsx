import { useState } from "react";

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i < Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handlePageClick = (number) => {
        setCurrentPage(number);
        paginate(number);
    }

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <span 
                                
                                className={currentPage === number ? 'page-link page-link--active' : 'page-link' }
                                onClick={() => {
                                    handlePageClick(number);
                                    paginate(number);
                                }}
                            >
                                {number}
                            </span>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;