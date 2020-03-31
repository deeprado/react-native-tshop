'use strict';

import AsyncStorage from '@react-native-community/async-storage';

/**
 * 获取存储的数据
 * @param {*} key
 */
export let getItem = async key => {
  let item = await AsyncStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item).v || null;
};

/**
 * 存入数据
 * @param {*} key
 * @param {*} value
 */
export function setItem(key, value) {
  AsyncStorage.setItem(
    key,
    JSON.stringify({
      v: value,
    }),
  );
}

/**
 * 删除已经存在的数据
 * @param {*} key
 */
export let removeItem = key => AsyncStorage.removeItem(key);

/**
 * 清除所有
 */
export let clear = () => AsyncStorage.clear();

/**
 * 获取所有的key
 */
export let getAllKeys = () => AsyncStorage.getAllKeys();
