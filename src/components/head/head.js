import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Top from './top';

class Head extends Component {
  render () {
    return (
      <View>
        <Top />
        <Text>整体的头部</Text>
      </View>
    )
  }
}

export default Head;
