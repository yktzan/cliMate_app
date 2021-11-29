import React, {Component} from 'react';
import {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Easing,
  Platform,
} from 'react-native';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';

import _ from 'lodash';

const deviceWidth =
  Platform.OS === 'ios'
    ? Dimensions.get('window').width
    : Dimensions.get('window').width - 500;

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._sideMenuAnimation = new Animated.Value(-1000);
    this.ViewEasing = new Animated.Value(1);
  }

  _showModal = () => {
    if (this.props.modalVisible) {
      this.props.showModal();
      this._sideMenuAnimation = new Animated.Value(-1000);
    } else {
      this.props.showModal();
      Animated.timing(this._sideMenuAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };

  _selectCountry = index => {
    this.props.selectedCountry(index);
    this._showModal();
  };

  _renderHeader = () => {
    return (
      <View style={style.modalHeaderContainer}>
        <Text style={style.modalTitleFont}>cliMate</Text>
      </View>
    );
  };

  _renderItem = ({item, index}) => {
    const animatedStyle = {
      transform: [
        {
          translateX: this._sideMenuAnimation,
        },
      ],
    };

    return (
      <TouchableOpacity
        onPress={() => {
          this._selectCountry(index);
        }}>
        <Animated.View
          style={[style.modalItemContainer, animatedStyle]}
          useNativeDriver={true}>
          <Text style={{fontSize: 40}}>{item.current_temperature}°</Text>
          <View style={{flexDirection: 'column', marginHorizontal: 5, flex: 1}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {item.country}
            </Text>
            <Text>{item.weather_type}</Text>
          </View>
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              },
              style.shadow,
            ]}>
            <Icon
              name={item.weather_icon}
              size={28}
              color={item.weather_icon_color}
            />
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  _renderForecast = ({item, index}) => {
    return (
      <View
        style={style.ForecastContainer}
        onPress={() => {
          this.props.selectedCountry(item);
        }}>
        <View style={style.forecastItemContainer}>
          <Icon name={item.icon} size={26} />
        </View>
        <View style={style.forecastItemContainer}>
          <Text style={style.forecastTempFont}>{item.day}</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={style.forecastItemContainer}>
          <Text style={style.forecastSmallFont}>{item.high}°</Text>
          <Text style={style.forecastSmallFont}>{item.low}°</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={style.homeContainerStyle}>
        {/* header */}
        {_.isEmpty(this.props.selected_weather_data) ? null : (
          <View
            style={style.mainContainer}
            onTouchStart={e => {
              // console.log(e.nativeEvent.pageY);
              return (this.touchY = e.nativeEvent.pageY);
            }}
            onTouchMove={e => {
              // console.log(this.touchY - e.nativeEvent.pageY);
              this.transformY = this.thouchY - e.nativeEvent.pageY;
            }}
            onTouchEnd={e => {
              if (this.touchY - e.nativeEvent.pageY > 10) {
                // console.log('swiped up!');
                if (
                  this.props.selected_weather_data_index <
                  this.props.weather_data.length - 1
                ) {
                  this.props.selectedCountry(
                    this.props.selected_weather_data_index + 1,
                  );
                }
              } else if (e.nativeEvent.pageY - this.touchY > 10) {
                if (this.props.selected_weather_data_index > 0) {
                  this.props.selectedCountry(
                    this.props.selected_weather_data_index - 1,
                  );
                }
              }
            }}>
            <View style={style.headerContainer}>
              <TouchableOpacity onPress={this._showModal}>
                <Icon name="bars" size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={style.headerTitle}>cliMate</Text>
              <TouchableOpacity>
                <Icon name="search" size={26} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* Image */}
            <View style={style.bannerContainer}>
              <Image
                source={{
                  uri: this.props.selected_weather_data.image,
                }}
                style={style.banner}
                blurRadius={50}
                resizeMode="cover"
              />
            </View>
            <View style={[style.imageContainer, style.shadow]}>
              <Image
                source={{
                  uri: this.props.selected_weather_data.image,
                }}
                style={style.image}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={style.countryName}>
                {this.props.selected_weather_data.country}
              </Text>
            </View>
            <View style={style.carouselContainer}>
              <Swiper loop={false}>
                <View style={style.swiperView1}>
                  {/* temparature display */}
                  <View style={style.temperatureContainer}>
                    <Icon
                      name={this.props.selected_weather_data.weather_icon}
                      size={50}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <Text style={style.temperatureText}>
                        {this.props.selected_weather_data.current_temperature}
                        <Text style={style.farenheitText}>F°</Text>
                      </Text>
                    </View>
                    <Text style={style.weatherText}>
                      {this.props.selected_weather_data.weather_type}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={style.highLowText}>
                        {this.props.selected_weather_data.high}°
                      </Text>
                      <Text style={style.highLowText}>
                        {this.props.selected_weather_data.low}°
                      </Text>
                    </View>
                  </View>
                  {/* extra Info */}
                  <View style={style.extraInfoContainer}>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Icon name="umbrella" size={30} />
                      <Text style={style.infoText}>
                        {this.props.selected_weather_data.rain}%
                      </Text>
                    </View>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Icon name="tint" size={30} />
                      <Text style={style.infoText}>
                        {this.props.selected_weather_data.humidity}%
                      </Text>
                    </View>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Icon name="wind" size={30} />
                      <Text style={style.infoText}>
                        {this.props.selected_weather_data.wind} mph
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={
                      this.props.weather_data.length > 0
                        ? this.props.weather_data[0].forecast
                        : []
                    }
                    keyExtractor={(item, index) => index.toString()}
                    // ListFooterComponent
                    renderItem={this._renderForecast}
                    useNativeDriver={true}
                    shouldUseNativeDriver={true}
                  />
                </View>
              </Swiper>
            </View>
          </View>
        )}
        <Modal
          isVisible={this.props.modalVisible}
          // isVisible={true}
          deviceWidth={deviceWidth}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          coverScreen={true}>
          <View style={style.modalContainer}>
            <FlatList
              data={this.props.weather_data}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={this._renderHeader}
              // ListFooterComponent
              renderItem={this._renderItem}
              useNativeDriver={true}
              shouldUseNativeDriver={true}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
