import React from 'react';
import './form.css'
const FormContainer = props => {
  return (
    <div>
      <section id="searchSect" className="form container">
        { props.children }
      </section>
    </div>
  )
}

export default FormContainer;