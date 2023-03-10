import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     // state의 초깃값 설정하기
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = { // -> 이 책에서는 이 방식으로 state를 선언한다.
        number: 0,
        fixedNumber: 0
    }
    render() {
        const { number, fixedNumber } = this.state;// state를 조회할 때는 this.state로 조회한다.
        const array = [1, 2]; // 배열 비구조화 할당 예시
        const [one, two, three] = array;
        console.log(one, two, three)
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {
                        // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                        // this.setState({ number: number + 1 });
                        // this.setState(prevState => {
                        //     return {
                        //         number: prevState.number + 1
                        //     };
                        // });

                        this.setState(
                            prevState => ({
                                number: prevState.number + 1
                            }),
                            () => {
                                console.log("click 함수가 실행되었습니다.")
                                console.log(this.state);
                            })

                        //위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                        // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;