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
                            <a 
                                href='!#'
                                className={currentPage === number ? 'page-link page-link--active' : 'page-link' }
                                onClick={() => {
                                    handlePageClick(number);
                                    paginate(number);
                                }}
                            >
                                {number}
                            </a>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;