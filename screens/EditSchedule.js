import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Block, Text, theme, Icon, NavBar } from "galio-framework";
import { materialTheme } from "../constants";
import { IMLocalized } from "../src/localization/IMLocalization";
import SwitchButton from "switch-button-react-native";
import SvgUri from "expo-svg-uri";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

const EditSchedule = (props) => {
  const { navigation } = props;
  const [activeSwitch, setActiveSwitch] = useState(1);

  const weekBar = () => {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        snapToInterval={theme.SIZES.BASE * 0.375}
        style={styles.weekScrollView}
      >
        <TouchableOpacity style={styles.dateActive}>
          <Text size={16} color={"white"}>
            WED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16} style={{ paddingLeft: 3 }}>
            THU
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16} style={{ paddingLeft: 8 }}>
            FRI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16} style={{ paddingLeft: 6 }}>
            SAT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16} style={{ paddingLeft: 4 }}>
            SUN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16}>MON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInActive}>
          <Text size={16} style={{ paddingLeft: 4 }}>
            THE
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const renderStatus = (status) => {
    switch (status) {
      case "income": {
        return (
          <SvgUri
            width="24 "
            height="24"
            source={require("../assets/icons/check.svg")}
            style={{
              position: "absolute",
              right: -4,
              top: -4,
            }}
          />
        );
      }
      case "miss": {
        return (
          <SvgUri
            width="24 "
            height="24"
            source={require("../assets/icons/redCheck.svg")}
            style={{
              position: "absolute",
              right: -4,
              top: -4,
            }}
          />
        );
      }
      case "complete": {
        return <></>;
      }
    }
  };

  const renderSchedules = (details) => {
    let { time, status, number } = { ...details };

    switch (status) {
      case "missed":
        return (
          <Block style={styles.scheduleBlock}>
            <Block flex flexDirection="row" style={styles.schedule}>
              <Block flex={4} style={styles.time}>
                <Text color={"white"} size={16}>
                  {time}
                </Text>
                <SvgUri
                  width="20"
                  height="20"
                  source={require("../assets/icons/dotRed.svg")}
                  style={{ position: "absolute", right: 0, top: -10 }}
                />
                <Text bold size={12} color={"white"} style={styles.number}>
                  {number}
                </Text>
              </Block>
              <Block flex={5}></Block>
              <Block flex={1} style={styles.schedule}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SchedulePatientList")}
                >
                  <SvgUri
                    width="16"
                    height="16"
                    source={require("../assets/icons/add.svg")}
                  />
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        );
      case "idle":
        return (
          <Block style={styles.scheduleBlock}>
            <Block flex flexDirection="row" style={styles.schedule}>
              <Block flex={4} style={styles.timeIdle}>
                <Text color={"black"} size={16}>
                  {time}
                </Text>
              </Block>
              <Block flex={5}></Block>
              <Block flex={1} style={styles.schedule}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("SchedulePatientList")}
                >
                  <SvgUri
                    width="16"
                    height="16"
                    source={require("../assets/icons/add.svg")}
                  />
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        );
      case "booked":
        return (
          <Block style={styles.scheduleBlock}>
            <Block flex flexDirection="row" style={styles.schedule}>
              <Block flex={4} style={styles.time}>
                <Text color={"white"} size={16}>
                  {time}
                </Text>
                <SvgUri
                  width="20"
                  height="20"
                  source={require("../assets/icons/dot.svg")}
                  style={{ position: "absolute", right: 0, top: -10 }}
                />
                <Text bold size={12} color={"white"} style={styles.number}>
                  {number}
                </Text>
              </Block>
              <Block flex={5}></Block>
              <Block flex={1} style={styles.schedule}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("SchedulePatientList")}
                >
                  <SvgUri
                    width="16"
                    height="16"
                    source={require("../assets/icons/add.svg")}
                  />
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        );
    }
  };

  const navbar = () => {
    return (
      <Block row style={styles.navbar} center>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            family="font-awesome"
            color="white"
            size={16}
            style={styles.chevronLeft}
          />
        </TouchableOpacity>
        <Text
          color="white"
          style={{ paddingLeft: theme.SIZES.BASE }}
          size={17}
          bold
        >
          Edit Schedule
        </Text>
      </Block>
    );
  };

  return (
    <Block flex style={styles.notification}>
      {navbar()}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Block center style={{ paddingTop: 10 }}>
          <Block>
            <Image
              source={require("../assets/images/grayscale-photo-of-man2.png")}
              style={styles.imageStyle}
            ></Image>
            <SvgUri
              width="20"
              height="20"
              source={require("../assets/icons/dot.svg")}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            />
          </Block>
          <Text size={20}>Dr. Ronald Joseph</Text>
          <Text>neurosergion specialist</Text>

          <Block center style={styles.centerBlock}>
            <SwitchButton
              onValueChange={(val) => setActiveSwitch(val)}
              text1="Past"
              text2="Upcoming"
              switchWidth={180}
              switchHeight={40}
              switchdirection="rtl"
              switchBorderRadius={100}
              switchSpeedChange={500}
              switchBorderColor="#3B3E51"
              switchBackgroundColor="#fff"
              btnBorderColor="#3B3E51"
              btnBackgroundColor="#3B3E51"
              fontColor="#3B3E51"
              activeFontColor="#fff"
            />
          </Block>
        </Block>
        <Block row style={styles.Container}>
          <Text style={styles.schedules}>Schedules</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
            <Text style={styles.calendar}>Calendar</Text>
          </TouchableOpacity>
        </Block>
        {weekBar()}
        <Block style={styles.renderSchedules}>
          {renderSchedules({
            time: "9.00-11.00 am",
            status: "missed",
            number: 3,
          })}
          {renderSchedules({
            time: "11.00-12.00 am",
            status: "idle",
          })}
          {renderSchedules({
            time: "14.00-15.00 pm",
            status: "booked",
            number: 2,
          })}
          {renderSchedules({
            time: "15.00-17.00 pm",
            status: "booked",
            number: 2,
          })}
        </Block>
        <Block center style={styles.saveBtn}>
          <TouchableOpacity>
            <Text size={16} color={"white"}>
              {IMLocalized("Save")}
            </Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  weekScrollView: {
    paddingTop: 0,
    paddingLeft: 10,
  },
  dateActive: {
    backgroundColor: "#00CE30",
    borderRadius: theme.SIZES.BASE * 1.5,
    paddingHorizontal: 8,
    paddingVertical: 20,
    marginRight: theme.SIZES.BASE,
    width: theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  dateInActive: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: theme.SIZES.BASE * 1.5,
    paddingHorizontal: 4,
    paddingVertical: 20,
    marginRight: theme.SIZES.BASE,
    width: theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  centerBlock: {
    marginTop: 30,
  },
  edit: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 20,
    width: 80,
    position: "absolute",
    top: height * 0.03,
    right: width * 0.03,
    borderColor: "#00CE30",
    alignItems: "center",
  },
  notification: {
    backgroundColor: theme.COLORS.WHITE,
  },
  profileImage: {
    width: width * 1.1,
    height: "auto",
  },
  Container: {
    width: width,
    height: "auto",
    paddingHorizontal: 30,
    paddingVertical: 14,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
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
    position: "relative",
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
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute",
  },
  past: {
    borderRadius: 10,
    paddingHorizontal: 44,
    paddingVertical: 6,
    backgroundColor: "#3B3E51",
  },
  schedules: {
    alignContent: "flex-start",
    alignSelf: "flex-start",
  },
  backIcon: {
    marginLeft: theme.SIZES.BASE,
  },
  roundBlock: {
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    position: "absolute",
    backgroundColor: "rgba(100, 120, 247, 0.84)",
    height: height * 0.16,
    width: width,
    top: -10,
    zIndex: 2,
  },
  heading: {
    marginTop: height * 0.08,
    paddingHorizontal: theme.SIZES.BASE * 0.5,
    position: "absolute",
    zIndex: 1,
  },
  sendReminder: {
    borderRadius: 20,
    backgroundColor: "#06D81E",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 24,
    marginTop: 6,
    left: 40,
  },
  renderSchedules: {
    marginTop: 20,
    marginHorizontal: width * 0.05,
  },
  calendar: {
    color: "#06D81E",
    paddingLeft: width * 0.5,
  },
  navbar: {
    backgroundColor: "#6E78F7",
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    width: width,
    height: height * 0.16,
    paddingTop: theme.SIZES.BASE * 2,
    paddingLeft: theme.SIZES.BASE,
  },
  time: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 30,
    backgroundColor: "#06D81E",
    borderColor: "#06D81E",
    borderWidth: 1,
  },
  timeIdle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 30,
    borderColor: "#06D81E",
    borderWidth: 1,
  },
  schedule: {
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    position: "absolute",
    right: 7,
    top: -9,
  },
  scheduleBlock: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "black",
    marginBottom: 20,
  },
  saveBtn: {
    width: width * 0.3,
    height: theme.SIZES.BASE * 2,
    backgroundColor: "#6E78F7",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditSchedule;