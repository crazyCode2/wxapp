import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Head from '../../components/head/head';
import Food from '../../components/food/food';
import './index.scss';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head />
        <Food />
      </View>
    )
  }
}

