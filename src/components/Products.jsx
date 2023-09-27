const Products = ({products, loading}) =>  {

    if(loading) {
        return <div>Loading...</div>
    }

    const handleClick = event => {
        event.currentTarget.classList.toggle('like--active');
    }

    return (
        <>
        {products.map((res, id) => (
            <div className='card__item' key={id}>
                <div className='card__item--image'><img src={res.image} alt="product" /></div>
                <button onClick={handleClick} className='card__item--like'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L5.62666 17.9333L16 28.3067L26.3733 17.9333L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52618C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#D2D2D2" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <p className='card__item--title'>{res.title}</p>
                <div className='card__item--price'>
                    <p className={res.oldPrice === null ? 'price--old display-none' : 'price--old'}>{!!res.oldPrice && res.oldPrice.toFixed(2)}</p>
                    <p>{res.price.toFixed(2)}<span>руб.</span></p>
                </div>
            </div>
        ))}</>
        
    )
}

export default Products;