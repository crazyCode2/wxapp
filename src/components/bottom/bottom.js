/**
 * 底部状态栏
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { getAllFoodInfo, getEvent } from '../../utils/common';
import './bottom.scss';

let events = getEvent();

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: 0,
      sendPrice: 5, // 配送费
      supportTakeBySelf: false,
      sendMustPrice:20, // 满多少钱起送
      allPrice:0 // 总价
    };
  }

  componentDidMount(){
    // 要获取整体的存储的菜品数据 进行计算
    // 获取计算好的 设置给state
    let {allPrice,allNum} = getAllFoodInfo();
    this.setState({Num:allNum,allPrice:allPrice});
    events.on("addcut",()=>{
      // 菜品发生变化
      let {allPrice,allNum} = getAllFoodInfo();
      this.setState({Num:allNum,allPrice:allPrice});
    })
  }

  render () {
    let { allPrice, Num, sendPrice, supportTakeBySelf, sendMustPrice } = this.state;
    return (
      <View className="bottom">
        <View className="bottom_body">
          {Num ? <Text className="num">{this.state.Num}</Text> : null}
          <Image className="store_img" src={Num ? require('../../assets/img/store.png') : require('../../assets/img/emptystore.png')} />
          <View className="info">
            {
              allPrice ?
              <Text className="price">{`￥${allPrice}`}</Text>
              :
              <View>
                <Text>{sendPrice ? `另需配送费￥${sendPrice} | `:""}</Text>
                <Text>{supportTakeBySelf ? "支持自取":"不支持自取"}</Text>
              </View>
            }
          </View>
          <View className="submit">
            {
              allPrice >= sendMustPrice ?
              <Text className="goPay">去结算</Text>
              :
              <Text>{sendMustPrice ? `￥${sendMustPrice}起送`:""}</Text>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Bottom;
