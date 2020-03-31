import React from 'react';
import {Text} from 'react-native';

class TextFix extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text {...this.props} allowFontScaling={false}>
        {this.props.children}
      </Text>
    );
  }
}

export default TextFix;
