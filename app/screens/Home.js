import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';

import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion
} from '../actions/currencies';

const swapButtonText = 'Reverse currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
    currencyError: PropTypes.string
  };
  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    });
  };
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote'
    });
  };
  handleTextChange = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handlePressSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };
  handlePressOptions = () => {
    this.props.navigation.navigate('Options');
  };
  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handlePressOptions} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={this.props.quoteCurrency}
            editable={false}
            defaultValue={quotePrice}
            keyboardType="numeric"
            textColor={this.props.primaryColor}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            onPress={this.handlePressSwapCurrency}
            text={swapButtonText}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const isFetching = conversionSelector.isFetching;
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
