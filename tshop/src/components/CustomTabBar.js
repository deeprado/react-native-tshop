import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs';
import {withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

class CustomTabBar extends Component {
  render() {
    return (
      <View style={{position: 'relative', backgroundColor: '#fff'}}>
        <MaterialTopTabBar {...this.props} />
        <TouchableOpacity
          style={{position: 'absolute', right: 12, bottom: 10}}
          onPress={() =>
            this.props.navigation.navigate('SearchPage', {
              param1: 86,
              param2: '你想要的都在这',
            })
          }>
          <Icon name={'search'} type="feather" size={20} color={'#666666'} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(CustomTabBar); //导出时用 withNavigation 包装
