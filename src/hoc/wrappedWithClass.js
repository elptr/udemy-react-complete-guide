import React, { Component } from "react";


// const wrappedWithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className = {className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// };


//Use stateful component (like shown down) to rich lifecycle components

const wrappedWithClass = (WrappedComponent, className) => {

    return class extends Component {
        render () {
            return(
                <div className = {className}>
                    <WrappedComponent {...this.props} />
                </div>)
        }
    }

};

export default wrappedWithClass;