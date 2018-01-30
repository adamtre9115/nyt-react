import React from 'react';
// import FormContainer from '../components/Form/formContainer';
import FormBtn from '../components/Form/formBtn';

const Results = props => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p>
            { props.headline }
          </p>
        </div>
        <div className="card-body">
          <p>
            { props.snippet }
          </p>
          <hr/>
          <p>Published:
            { props.pubDate }
          </p>
          <div className="row">
            <div className="col-sm-4">
              <FormBtn data-value={ props.uniqueId } onClick={ props.click } say="Save" />
            </div>
            <div className="col-sm-4">
              <FormBtn href={ props.url } target="_blank" say="View Article" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results;