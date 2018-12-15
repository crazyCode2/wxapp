import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import Activity from './activity';
import './head.scss';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        title:"川湘居",
        notice:"欢迎光临，很高兴为您服务~",
        tags:["味道赞","主食真好","分量足"]
      }
    };
  }

  render () {
    let { store } = this.state;
    return (
      <View className="head">
        <Top />
        <Image className="back" src={require('../../assets/img/back.jpg')} />
        <View className="store">
          <Image className="store_img" src={require('../../assets/img/store.jpg')} />
          <View className="store_text">
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item,index) => <Text className="tags_text" key={index}>{item}</Text>)}
            </View>
          </View>
        </View>
        <Activity />
      </View>
    )
  }
}

export default Head;
