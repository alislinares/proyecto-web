import React, { Component } from "react";
class Menu1 extends Component {
    render() {
        const { params } = this.props.match;
        return(
            <div>
                <h1>
                    Menu-------------1
                </h1>
                <h3>
                    {params.name}
                    h3-----------------
                </h3>
            </div>
        );
    }
}

export default Menu1;
