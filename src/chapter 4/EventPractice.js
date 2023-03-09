import React, { Component } from 'react';

// class형 컴포넌트 이벤트 연습
class EventPractice extends Component {

    state = {
        message: ''
    }

    /* 생성자를 이용한 메서드 선언 방식은 새로운 메서드가 생성될 때 마다 생성자도 수정해야 하는 번거로움이 있다.
    * 그래서 바벨의 transform-class-properties 문법을 이용해 변경한다
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this); 
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    */

    // 바벨의 transform-class-properties 문법 -> 위 방식보다 코드가 깔끔해짐.
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder='아무거나 입력해 보세요.'
                    value={this.state.message}
                    onChange={
                        // (e) => {
                        //     this.setState({
                        //         message: e.target.value
                        //     })
                        // }
                        this.handleChange
                    }
                >
                </input>
                <button onClick={
                    // () => {
                    //     alert(this.state.message);
                    //     this.setState({
                    //         message: ''
                    //     })
                    // }
                    this.handleClick
                }>
                    확인</button>
            </div>
        );
    }
}

export default EventPractice;