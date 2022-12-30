import React, { useEffect, useRef } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';

const RowContainer = ({ data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className="w-full flex items-center gap-3  my-12 scroll-smooth overflow-x-scroll scrollbar-none">
      {data && data.length > 0 ? (
        data.map((item) => <ItemCard key={item.id} cardData={item} />)
      ) : (
        <div className="mt-auto mx-auto ">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default RowContainer;
