import {MyButton} from "../UI/button/MyButton";

const PostItem = ({post,number,remove}) => {
    const {title,body} = post

    return (
        <div className={'App'}>
           <div className={'post'}>
               <div className={'pst__content'}>
                   <strong> {number} - {title}</strong>
                   <div>
                       {body}
                   </div>
               </div>
               <div>
                    <MyButton onClick={() =>  remove(post)}>
                        Delete
                    </MyButton>
               </div>
           </div>
        </div>
    );
};

export {PostItem};