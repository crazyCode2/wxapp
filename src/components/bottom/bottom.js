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
      //
    };
  }

  render () {
    return (
      <View className="bottom">
        <View className="bottom_body">
          <Image className="store_img" src={require('../../assets/img/emptystore.png')} />
          <View className="info">
            <Text>另需配送费￥3</Text>
            <Text>支持自取</Text>
          </View>
          <View className="submit">
            <Text>￥20起送</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Bottom;
