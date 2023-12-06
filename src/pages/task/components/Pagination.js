import '../taskCSS/Pagenation.css';

const Pagination = ({currentPage, setCurrentPage, pageInfo}) => {


    const pageChangeHandler = (goPage) => {
        setCurrentPage(goPage);
    };

    const pageNumber = [];
    if (pageInfo) {
        for (let i = 1; i <= pageInfo.pageEnd; i++) {
            pageNumber.push(i);
        }
    }

    return (
        <div className="pagination">
            <button
                className="pagination__button pagination__button--prev"
                onClick={() => pageChangeHandler(currentPage - 1)}
                disabled={currentPage === pageInfo.pageStart}
            >
                Prev
            </button>
            {pageNumber.map((eachpage) => ( // 1, 2, 3, 4...
                <button
                    key={eachpage}
                    className={`pagination__button ${currentPage === eachpage ? 'pagination__button--active' : ''}`}
                    onClick={() => pageChangeHandler(eachpage)}
                >
                    {eachpage}
                </button>
            ))}
            <button
                className="pagination__button pagination__button--next"
                onClick={() => pageChangeHandler(currentPage + 1)}
                disabled={currentPage === pageInfo.pageEnd}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;