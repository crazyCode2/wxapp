/**
 * 底部状态栏
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './bottom.scss';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: 0,
      sendPrice: 5, // 配送费
      supportTakeBySelf: false,
      sendMustPrice:20 // 满多少钱起送
    };
  }

  render () {
    let { Num, sendPrice, supportTakeBySelf, sendMustPrice } = this.state;
    return (
      <View className="bottom">
        <View className="bottom_body">
          {Num ? <Text className="num">{this.state.Num}</Text> : null}
          <Image className="store_img" src={require('../../assets/img/emptystore.png')} />
          <View className="info">
            <Text>{sendPrice ? `另需配送费￥${sendPrice} | `:""}</Text>
            <Text>{supportTakeBySelf ? "支持自取":"不支持自取"}</Text>
          </View>
          <View className="submit">
            <Text>{sendMustPrice ? `￥${sendMustPrice}起送`:""}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Bottom;
