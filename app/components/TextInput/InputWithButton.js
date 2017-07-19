import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = props => {
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const buttonTextStyle = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyle.push({ color: props.textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        underlayColor={underlayColor}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyle}>
          {props.buttonText}
        </Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndrod="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string
};

export default InputWithButton;
