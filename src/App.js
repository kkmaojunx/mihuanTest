import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestData, clickRandom } from './Redux/Actions';
import MonsterItem from './Components/MonsterItem';

class App extends React.Component {
  // 初始调用
  componentDidMount() {
    const vm = this;
    const { requestUrl } = this.props;
    vm.props.requestAll(requestUrl);
  }

  render() {
    const { monsterArr, fourthCard, randomOne } = this.props;
    return (
      <div className="App">
        <div className="hStyle">
蜜獾测试题:
          <button type="button" className="btnStyle" onClick={() => randomOne()}>点击抽取随机人物！</button>
        </div>
        <div className="mainBox">
          {monsterArr.map((item, index) => (
            <div key={index}>
              <MonsterItem itemValue={item} />
            </div>
          ))}
          <MonsterItem itemValue={fourthCard} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requestUrl: state.requestUrl,
  monsterArr: state.monsterArr,
  fourthCard: state.fourthCard,
});
const mapDispatchToProps = dispatch => ({
  requestAll: (urlArr) => { // 触发 请求数据action
    dispatch(requestData(urlArr));
  },
  randomOne: () => { // 触发点击获取随机人物的action
    dispatch(clickRandom('fourthCard', 'monsterArr'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
