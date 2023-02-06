import React, {useState} from 'react';


const PostItem = ({post}) => {
    const {id,title,body} = post

    return (
        <div className={'App'}>
           <div className={'post'}>
               <div className={'pst__content'}>
                   <strong> {id} - {title}</strong>
                   <div>
                       {body}
                   </div>
               </div>
               <div>
                   <button className={'post_btns'}>delete</button>
               </div>
           </div>
        </div>
    );
};

export {PostItem};