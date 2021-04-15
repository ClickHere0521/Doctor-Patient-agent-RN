import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { Button, Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width,height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

const PatientInfo = (props) => {
  return (
    <Block flex style={styles.patientInfo}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Block center style={{paddingTop: 10}}>
            <Image source={require('../assets/images/grayscale-photo-of-man2.png')} style={styles.imageStyle}></Image>
            <Text size={20}>
                Dr. Ronald Joseph
            </Text>
            <Text>
                neurosergion specialist
            </Text>
            <Block center style={styles.centerBlock}>
              <Block row>
                <Block middle>
                  <TouchableOpacity
                    style={{ paddingHorizontal: 20, paddingVertical: 6}}                
                  >
                    <Text size={16}>
                      Upcoming
                    </Text>
                  </TouchableOpacity>
                </Block>
                <Block middle>
                  <TouchableOpacity
                      style={{ borderRadius: 10, paddingHorizontal: 44, paddingVertical: 6, backgroundColor: '#3B3E51'}}                
                  >
                      <Text size={16} color='white'>
                          Past
                      </Text>
                  </TouchableOpacity>
                </Block>
              </Block>             
            </Block>
        </Block>
        <Block style={styles.Container}>
          <Text style={{ alignSelf: 'flex-start', alignContent: 'flex-start'}}>
            Schedules
          </Text>
        </Block>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{height: 50}}
          showsHorizontalScrollIndicator={false}
          snapToInterval={(theme.SIZES.BASE * 0.375)}
          contentContainerStyle={{ paddingHorizontal: theme.SIZES.BASE / 2 }}
          >
              
          <TouchableOpacity           
            style={{backgroundColor: '#00CE30', borderRadius: 10, padding: 4, marginRight: 4}}
          >              
            <Text color={'white'} style={{alignContent: 'center', alignSelf: 'center'}}>WED</Text>
            <Text color={'white'} size={10}>04/14/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>THU</Text>
            <Text size={10}>04/15/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>FRI</Text>
            <Text size={10}>04/16/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>SAT</Text>
            <Text size={10}>04/17/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>SUN</Text>
            <Text size={10}>04/18/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>MON</Text>
            <Text size={10}>04/19/2021</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#EDEDED', borderRadius: 10, padding: 4, marginRight: 4}}
          >
            <Text style={{alignContent: 'center', alignSelf: 'center'}}>THE</Text>
            <Text size={10}>04/19/2021</Text>
          </TouchableOpacity>
        </ScrollView>
        <Block style={styles.scheduleDetail}>
          <Text size={18}>Sevre Pain</Text>
          <Text size={12}>Dr. Naveed Baloch</Text>
          <Text style={{marginTop: 10}}>Symptoms: Headache</Text>
          <Text>Appointment Date: 23, November 2020</Text>
          <Text bold style={{marginTop: 10}}>Medication </Text>
          <Text>Esso 20g, Amastan 5/80g, Cipronxin 500g</Text>
        </Block>
        <Block style={styles.scheduleDetail}>
          <Text size={18}>Sevre Pain</Text>
          <Text size={12}>Dr. Naveed Baloch</Text>
          <Text style={{marginTop: 10}}>Symptoms: Headache</Text>
          <Text>Appointment Date: 23, November 2020</Text>
          <Text bold style={{marginTop: 10}}>Medication </Text>
          <Text>Esso 20g, Amastan 5/80g, Cipronxin 500g</Text>
        </Block>
      </ScrollView>      
    </Block>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width:80, 
    height:80
  },
  centerBlock: {
    marginTop: 30, 
    borderWidth:1, 
    borderRadius: 12
  },
  scheduleDetail: {
    borderWidth: 1, 
    borderColor: '#EDEDED', 
    borderRadius: 10, 
    padding: 10, 
    margin: 8,
  },
  patientInfo: {
    marginTop: Platform.OS === 'android' ? height * 0.01 : height * 0.01,
    marginHorizontal: width * 0.04,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 3,
    borderRadius: 10
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  Container: {
    width: width,
    height: 'auto',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 90,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE,
    marginBottom: 0,
    paddingTop: height * 0.02,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    elevation: 3,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});

export default PatientInfo;