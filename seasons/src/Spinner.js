import React from "react";

export default function Spinner(props) {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}


// if we dont pass in a prop.message then this will load by default
Spinner.defaultProps = {
    message:"Loading..."
}