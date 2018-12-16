/**
 * 加减菜品
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { getFoodCount, setFoodCount } from '../../utils/common';
import './addcut.scss';

class AddCut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: 0
    };
  }

  componentDidMount(){
    this.setState({
      Num: getFoodCount(this.props.food)
    })
  }

  // 减1的逻辑
  cutFood(){
    if(this.props.food){
      if(this.state.Num > 0){
        setFoodCount(this.props.food,this.state.Num,'cut',() => {
          this.setState({
            Num: getFoodCount(this.props.food)
          })
        });
      }else{
        console.error("当前加减菜品出现异常");
      }
    }
  }

  // 加1的逻辑
  addFood(){
    if(this.props.food){
      setFoodCount(this.props.food,this.state.Num,'add',() => {
        this.setState({
          Num: getFoodCount(this.props.food)
        })
      });
    }
  }

  render () {
    let { Num } = this.state;
    let hideClass = Num > 0 ? "" : "hide";
    return (
      <View className="addcut">
        <Image onClick={this.cutFood.bind(this)} className={"opeate_img " + hideClass} src={require('../../assets/img/cut.png')} />
        <Text className={"food_num " + hideClass}>{Num}</Text>
        <Image onClick={this.addFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')} />
      </View>
    )
  }
}

export default AddCut;
