import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple'
});
class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressTheme = color => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          iconBackground={styles.$orange}
          selected
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          iconBackground={styles.$green}
          selected
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          iconBackground={styles.$purple}
          selected
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
