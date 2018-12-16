/**
 * 加减菜品
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './addcut.scss';

class AddCut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0
    };
  }

  // 减1的逻辑
  cutFood(){
    //
  }

  // 加1的逻辑
  addFood(){
    //
  }

  render () {
    return (
      <View className="addcut">
        <Image onClick={this.cutFood.bind(this)} className="opeate_img" src={require('../../assets/img/cut.png')} />
        <Text className="food_num">0</Text>
        <Image onClick={this.addFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')} />
      </View>
    )
  }
}

export default AddCut;
