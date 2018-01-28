import React from "react";

const FormBtn = props => {
  return (
    <div>
      <a {...props} className="btn btn-primary">
        { props.say }
      </a>
    </div>
  )
}

export default FormBtn;