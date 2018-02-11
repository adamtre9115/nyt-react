import React from "react";
import FormBtn from "../components/Form/formBtn";

const Saved = props => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p className="aHeadline">{props.headline}</p>
        </div>
        <div className="card-body">
          <p className="aSnippet">{props.snippet}</p>
          <hr />
          <p className="aDate">
            Published:
            {props.pubDate}
          </p>
          <div className="row">
            <div className="col-sm-4">
              <FormBtn
                data-value={props.uniqueId}
                onClick={() => props.handleSaveSubmit(props.uniqueId)}
                say="Delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
