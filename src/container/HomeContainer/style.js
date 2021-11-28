import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homeContainerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  bannerContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    elevation: -1,
  },
  banner: {
    width: '100%',
    height: '25%',
  },
  imageContainer: {
    borderRadius: 75,
    height: 150,
    width: 150,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    zIndex: 999,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  countryName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#030303',
  },
  carouselContainer: {
    height: '50%',
  },
  swiperView1: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  temperatureContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  temperatureText: {
    fontSize: 72,
    fontWeight: '300',
    color: '#030303',
  },
  farenheitText: {
    fontSize: 28,
    fontWeight: '300',
    color: '#030303',
  },
  weatherText: {
    fontSize: 20,
  },
  highLowText: {
    fontSize: 20,
    color: '#030303',
  },
  extraInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 26,
    color: '#030303',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  modalHeaderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  modalTitleFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalItemContainer: {
    height: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ForecastContainer: {
    height: 60,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forecastItemContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
  },
  forecastSmallFont: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  forecastTempFont: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
