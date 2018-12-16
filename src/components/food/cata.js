/**
 * 菜品分类
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './cata.scss';

class Cata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCata: null,
      cata:[
        {name:"专场",id:1},
        {name:"热销",id:2},
        {name:"折扣",id:3},
        {name:"主食",id:4},
        {name:"热炒",id:5},
        {name:"凉菜",id:6},
        {name:"特色乱炖",id:7}
      ]
    };
  }

  clickHandle(item){
    // let { selectCata } = this.state;
    if(this.state.selectCata && this.state.selectCata.id != item.id){
      this.setState({
        selectCata: item
      },() => {
        this.props.onChangeCata && this.props.onChangeCata(this.state.selectCata);
      })
    }else if(!this.state.selectCata){
      this.setState({
        selectCata: item
      },() => {
        this.props.onChangeCata && this.props.onChangeCata(this.state.selectCata);
      })
    }
  }

  render () {
    let { selectCata, cata } = this.state;
    return (
      <View className="cata">
        {
          cata.map((item,index) => {
            return (<Text
              className={"cata_name " + ((selectCata && selectCata.id == item.id) ? "select" : "")}
              key={item.id}
              onClick={this.clickHandle.bind(this,item)}
            >{item.name}</Text>)
          })
        }
      </View>
    )
  }
}

export default Cata;
