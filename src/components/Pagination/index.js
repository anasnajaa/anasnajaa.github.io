import React from 'react';
import { Pagination as Pg, Spinner } from 'react-bootstrap';
import { v4 } from 'uuid';

const getPageElement = (currentPage, pageToAdd, onClick, isLoading) => {
    if(currentPage === pageToAdd) {
        return (
            <Pg.Item disabled={isLoading} key={v4()} active>
            {!isLoading ? pageToAdd:
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
            }
            </Pg.Item>
        );
    } else if (pageToAdd === "...") {
        return (
            <Pg.Ellipsis disabled key={v4()} />
        );
    } else {
        return (
            <Pg.Item disabled={isLoading} onClick={()=>{onClick(pageToAdd)}} key={v4()}>
                {pageToAdd}
            </Pg.Item>
        );
    }
}

const getPages = (pagObj, onClick, isLoading)=>{
    const current = pagObj.page;
    let last = pagObj.pages;
    let width = 1;
    const left = current - width;
    const right = current + width + 1;
    const range = [];
    const pages = [];
    let l;
  
    for (let i = 1; i <= last; i += 1) {
      if (i === 1 || i === last || (i >= left && i <= right)) {
        range.push(i);
      } else if (i < left) {
        i = left - 1;
      } else if (i > right) {
        range.push(last);
        break;
      }
    }
  
    range.forEach(i => {
      if (l) {
        if (i - l === 2) {
            pages.push(getPageElement(
            current, 
            l + 1,
            onClick,
            isLoading));
        } else if (i - l !== 1) {
            pages.push(getPageElement(
                current, 
                '...',
                onClick,
                isLoading));
        }
      }
      pages.push(getPageElement(
        current, 
        i,
        onClick,
        isLoading));
      l = i;
    });
  
    return pages;
}

const Pagination = ({ pg, isLoading, onNextClick, onPreviousClick, onPageClick }) => {
    return (
        <Pg size="sm">
            {pg && pg.pages && pg.pages > 0 ?
            <>
                {pg.pages === 1 ?
                <>
                <Pg.Prev disabled />
                    <Pg.Item disabled>1</Pg.Item>
                <Pg.Next disabled />
                </>
                :
                <>
                    <Pg.Prev disabled={isLoading || pg.page === 1} onClick={()=>{onPreviousClick()}} />
                        {getPages(pg, onPageClick, isLoading)}
                    <Pg.Next disabled={isLoading || pg.pages === pg.page} onClick={()=>{onNextClick()}}/>
                </>}
            </>
            :
            <>
                {isLoading ? 
                <>
                    <Pg.Item disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    </Pg.Item>
                </>
                :
                <>
                    <Pg.Prev disabled />
                        <Pg.Item disabled>None</Pg.Item>
                    <Pg.Next disabled />
                </>}
            </>}
        </Pg>
    );
}

export default Pagination;