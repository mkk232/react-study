import React, { Component } from 'react';

/* class형 컴포넌트 이벤트 연습
 * 여러개의 input 박스 이벤트 컨트롤 
*/
class EventPractice_MultiInput extends Component {

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    // onKeyPress
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder='사용자명'
                    value={this.state.username}
                    onChange={this.handleChange}
                >
                </input> <br />
                <input
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요.'
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                >
                </input>
                <button onClick={this.handleClick}>
                    확인</button>
            </div>
        );
    }
}

export default EventPractice_MultiInput;