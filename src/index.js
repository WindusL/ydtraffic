import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

var Hello = React.createClass({
    render: function () {
        var m = moment().format();
        return <div style="color:red;">Hello {this.props.name}-{m}这是什么？What this 123</div>;
    }
});

ReactDom.render(
    <Hello name="World" />,
    document.getElementById('AppRoot')
);


