import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
           <h3 className='text-3xl'>{bookmark.title}</h3> 
        </div>
    );
};

export default Bookmark;