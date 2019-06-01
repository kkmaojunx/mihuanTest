import React from 'react';
import './App.css';
import {requestData, clickRandom} from './Redux/Actions'
import MonsterItem from './Components/MonsterItem'
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        let {monsterArr, fourthCard, randomOne} = this.props;
        return (
            <div className="App">
                <div className='hStyle'>蜜獾测试题:
                    <button className='btnStyle' onClick={() => randomOne()}>点击抽取随机人物！</button>
                </div>
                <div className='mainBox'>
                    {monsterArr.map((item, index) => {
                        return (
                            <div key={index}>
                                <MonsterItem itemValue={item}/>
                            </div>
                        )
                    })}
                    <MonsterItem itemValue={fourthCard}/>
                </div>
            </div>
        )
    }

    //初始调用
    componentDidMount() {
        let requestUrl = this.props.requestUrl;
        this.props.requestAll(requestUrl)
    }
}

const mapStateToProps = (state) => {
    return {
        requestUrl: state.requestUrl,
        monsterArr: state.monsterArr,
        fourthCard: state.fourthCard
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestAll: (urlArr) => { //触发 请求数据action
            dispatch(requestData(urlArr));
        },
        randomOne: () => {  // 触发点击获取随机人物的action
            dispatch(clickRandom('fourthCard', 'monsterArr'))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
