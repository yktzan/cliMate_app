import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HomeContainer from '../container/HomeContainer/index';
import {getCountriesWeather, selectCountryWeather} from '../action';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.props.getCountriesWeather();
  }

  _showModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  _selectedCountry = index => {
    this.props.selectCountryWeather(index);
    if (this.props.modalVisible) {
      this._showModal();
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <HomeContainer
          weather_data={this.props.weather_data}
          selected_weather_data={
            this.props.weather_data.length > 0
              ? this.props.weather_data[this.props.selected_weather_data_index]
              : {}
          }
          selected_weather_data_index={this.props.selected_weather_data_index}
          modalVisible={this.state.modalVisible}
          showModal={this._showModal}
          selectedCountry={this._selectedCountry}
        />
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  weather_data: PropTypes.array.isRequired,
  selected_weather_data_index: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const {weather_data, selected_weather_data_index} = state.app;
  return {weather_data, selected_weather_data_index};
};

export default connect(mapStateToProps, {
  getCountriesWeather,
  selectCountryWeather,
})(HomeScreen);
