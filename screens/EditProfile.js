import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Button, Block, Text, theme, Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

const EditProfile = (props) => {
  const { navigation } = props;  

  const [vals, setVals] = useState({
    email: '-',
    password: '-',
    active: {
      'email': false,
      'password': false,
    }
  });

  const handleChange = (name, value) => {
    setVals({ [name]: value });
  }

  return (
    <Block center flex style={styles.profile}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Block center row>
          <Block middle>
            <Image source={require('../assets/images/avatar.png')} />
          </Block>
          <Block middle style={styles.uploadPicture}>
            <Block row>
              <Block middle>
                <TouchableOpacity>
                  <Text style={{marginRight: 20}}>
                    Upload 
                  </Text>
                </TouchableOpacity>                                            
              </Block>
              <Block middle>
                <TouchableOpacity>
                  <Text>
                    Remove 
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>      
        <Block center style={styles.userInfo}>        
        <Text style={{paddingTop: 10, alignSelf: 'flex-start'}}>
          Full name <Text color={'red'}>*</Text>
        </Text>
        <Input
          borderless
          color="grey"
          placeholder="Mark Veronic"
          type="email-address"
          autoCapitalize="none"
          bgColor='transparent'
          value="Mark Veronic"
          placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
          onChangeText={text => handleChange('name', text)}
          style={[styles.input, vals.email ? styles.inputActive : null]}          
        />
        <Text style={{paddingTop: 10, alignSelf: 'flex-start'}}>
          Email <Text color={'red'}>*</Text>
        </Text>
        <Input
          borderless
          color="grey"
          placeholder="Markveronic@gmail.com"
          type="email-address"
          autoCapitalize="none"
          bgColor='transparent' 
          value="Markveronic@gmail.com"         
          placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
          onChangeText={text => handleChange('email', text)}
          style={[styles.input, vals.email ? styles.inputActive : null]}
          
        />
        <Text style={{paddingTop: 10, alignSelf: 'flex-start'}}>
          Tel <Text color={'red'}>*</Text>
        </Text>
        <Input
          borderless
          color="grey"
          placeholder="+1234567890"
          type="email-address"
          autoCapitalize="none"
          bgColor='transparent'    
          value='+1234567890'      
          placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
          onChangeText={text => handleChange('email', text)}
          style={[styles.input, vals.email ? styles.inputActive : null]}
          
        />
        <Text style={{paddingTop: 10, alignSelf: 'flex-start'}}>
          Location <Text color={'red'}>*</Text>
        </Text>
        <Input
          borderless
          color="grey"
          placeholder="California, US"
          type="email-address"
          autoCapitalize="none"
          bgColor='transparent'     
          value="California, US"     
          placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
          onChangeText={text => handleChange('email', text)}
          style={[styles.input, vals.email ? styles.inputActive : null]}
          
        />
        <Button
          center
          shadowless
          color={materialTheme.COLORS.PRIMARY}
          textStyle={styles.optionsButtonText}
          style={styles.optionsButton}
          onPress={() => handleDelete(item.id)}
        >
          SAVE
        </Button>        
      </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? height * 0.02 : height * 0.02,
  },
  optionsButtonText: {
    fontSize: theme.SIZES.BASE * 0.75,
    color: 'white',
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.29,
  },
  optionsButton: {
    width: 'auto',
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  uploadPicture: {
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
    marginTop: height * 0.04,
    marginHorizontal: width * 0.01,    
    borderRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 3,
    zIndex: 2,
  },
  userInfo: {
    paddingHorizontal: width * 0.03,
    marginTop: height * 0.04,
    marginBottom: height * 0.05,
    marginHorizontal: width * 0.01,    
    borderRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 3,
    zIndex: 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: 'auto',
    flex: 1,
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
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE,
    marginBottom: 0,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
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
  input: {
    width: width * 0.8, 
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: "black",
  },
});

export default EditProfile;