import React from 'react';

import CSS from '../Users.module.css';

const Pagination = ({pages, currentPage, onPageChange}) => {
    return (
        <>
            {
                pages.map( p => {
                    return <span 
                    className={ currentPage === p && CSS.countBold}
                    onClick={ () => { onPageChange(p) } }>
                        {p}
                    </span>
                })
            }
        </>
    )
}

export default Pagination;