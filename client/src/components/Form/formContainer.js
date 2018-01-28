import React from 'react';
import './form.css'
const FormContainer = props => {
  return (
    <div>
      <section id={ props.id }>
        <div className=" form container">
          <h3 className="text-center">{ props.heading }</h3>
          { props.children }
        </div>
      </section>
    </div>
  )
}

export default FormContainer;