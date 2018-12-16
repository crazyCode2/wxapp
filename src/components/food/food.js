import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import FoodList from './foodlist';
import './food.scss';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}],
      foodlist:[],
      currentList:[],
      selectCata:null
    };
  }

  changeTab(current){
    this.setState({
      current
    });
  }

  // 切换分类
  changeCata(selectCata){
    this.setState({selectCata:selectCata});
    if(this.state.foodlist.some(item => item.pid == selectCata.id)){ // 返回值为true/false
      // 不用加载数据
      this.setState({
        currentList: this.state.foodlist.filter(item => item.pid == selectCata.id) // 筛选
      })
    }else{
      // 需要加载数据
      this.setState({
        foodlist: this.state.foodlist.concat(this.getData(selectCata))
      },() => {
        this.setState({
          currentList: this.state.foodlist.filter(item => item.pid == selectCata.id) // 筛选
        })
      })
    }
  }

  getData(selectCata){
    // 生成模拟数据
    let count = Math.round(Math.random()*2);
    // let imgurl = `../../assets/img/${count}.jpg`;
    return Array.from(Array(Math.round(Math.random()*20)),(v,k) =>
      ({
        price:Math.round(Math.random()*20),
        sole:Math.round(Math.random()*50),
        img:count,
        pid:selectCata.id,
        id:selectCata.id + "_" + k,
        title:"分类" + selectCata.id + "菜品" + (k+1)
      })
    )
  }

  render () {
    let { current, tabList, currentList, selectCata } = this.state;
    return (
      <View className="food">
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={this.changeTab.bind(this)}
        >
          <AtTabsPane>
            <View className="food_body">
              <Cata onChangeCata={this.changeCata.bind(this)} />
              <FoodList selectCata={selectCata} currentList={currentList} />
            </View>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Food;
