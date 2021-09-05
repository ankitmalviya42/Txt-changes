import React from "react";

const Alert = (props) => {
  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{ height: "40px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible`}
            role="alert"
            id="liveAlert"
          >
            <strong>
              {`${capitalize(props.alert.type)}`} : {props.alert.msg}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
