import React from "react"

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={() => props.changeUsername('Anna')}>Change the user name</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.changeAge(33)}>Change the user age</button>
                    </div>
                </div>
            </div>
        </div>
    )
}