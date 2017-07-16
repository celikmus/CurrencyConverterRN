import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import ClearButton from '../components/Buttons/ClearButton';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const clearButtonText = 'Reverse currencies';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };
  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };
  handleTextChange = text => {
    console.log('change text', text);
  };
  handlePressClearButton = () => {
    console.log('press clear button');
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          onPress={this.handlePressBaseCurrency}
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          onPress={this.handlePressQuoteCurrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE}
          keyboardType="numeric"
        />
        <ClearButton
          onPress={this.handlePressClearButton}
          text={clearButtonText}
        />
      </Container>
    );
  }
}

export default Home;
