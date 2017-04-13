import React from 'react';
import ReactDom from 'react-dom';

var Hello = React.createClass({
    etInitialState:function(){
        return {
            opacity : 1.0,
            fontSize : 10
        }
    },
    componentDidMount : function(){
        this.timer = setInterval(function(){
            var opacity = this.state.opacity;
            var fontSize = this.state.fontSize;
            opacity -= .05;
            fontSize += 1;
            if(opacity <= 0.1){
                opacity = 1.0
            }
            if(fontSize >= 20){
                fontSize = 10;
            }
            this.setState({
                opacity : opacity,
                fontSize : fontSize
            });
        }.bind(this),100);
    },
    render : function(){
        return (
            <div styles="{{font-size:this.state.fontSize + 'em'}}">
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDom.render(  
   <Hello name="world"/> ,
    document.getElementById('AppRoot')
);