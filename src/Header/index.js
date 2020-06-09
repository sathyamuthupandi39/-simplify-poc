import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-main">
                    Assessment
                </div>
                <br />
                <span className="header-sub">
                    Answer the below questions to the best of your knowledge to complete the risk assessment
                </span>
                <hr />
            </div>
        )
    }
}

export default Header