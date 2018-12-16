import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import './food.scss';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}]
    };
  }

  changeTab = (current) => {
    this.setState({
      current
    });
  }

  render () {
    let { current, tabList } = this.state;
    return (
      <View className="food">
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={this.changeTab}
        >
          <AtTabsPane>
            <Cata />
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Food;
