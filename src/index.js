import React from 'react';
import ReactDom from 'react-dom';

var Hello = React.createClass({
    propTypes:{
        // name:React.PropTypes.string.isRequired
    },
    render: function () {
        return <div>
            {
                React.Children.map(this.props.children,function(child){
                    return child;
                })
            }
        </div>;
    }
});
var name = "123";
ReactDom.render(
    <Hello name={{name}}>
        <ul>
            <li>123</li>
            <li>456</li>
        </ul>
    </Hello>,
    document.getElementById('AppRoot')
);


