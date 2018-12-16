/**
 * 缓存数据 H5 小程序
 * {food.id:{菜品信息 Num}, }
 */
import Taro from '@tarojs/taro';
const foodKey = "taro_meituan";
/**
 * 获取菜品数量
 * 通过传入的信息来统计当前有多少个菜品
 */
export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if(store){
    // 查找
    if(store[food.id]){
      return store[food.id].Num;
    }else{
      return 0;
    }
  }else{
    return 0;
  }
}

/**
 * 设置菜品数量
 * 当加菜或者减菜时触发
 * Num 是由加减菜组件自身的state存储的
 * 当减的数量等于0时 要删除菜品的数据结构
 * 当加菜时 发现数据结构中没有该菜品 新增菜品数据结构
 */
export function setFoodCount(food,Num,type,callback) {
  // body...
}
