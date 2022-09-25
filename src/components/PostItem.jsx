import React from "react";

const Postitem = (props) => {

    return (
        <div className="post">
        <div className="post__content">
          <strong> {props.post.id}. {props.post.title} </strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
            <button> Delete </button>
        </div>
      </div>
    );
};

export default Postitem;