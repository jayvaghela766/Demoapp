import React, { PropsWithChildren } from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Colors } from "theme/Color";
import { verticalScale } from "theme/ResponsiveSize";


type CustomTabView = PropsWithChildren<{
  tabList?: any;
  navigation?: any;
  activeTintColor?: string;
  inactiveTintColor?: string;
  activeTab?: number;
  onChangeTab?: any;
}>;


const CustomTabView = (props: CustomTabView) => {
  const {
    tabList,
    navigation,
    activeTintColor = Colors.secondblack,
    inactiveTintColor = Colors.white,
    onChangeTab,
    activeTab
  } = props;
  // const activeTabIndex = navigation?.state?.index;

  return (
    <View style={styles.containerHeader}>
      <View style={styles.tabContainer}>
        {tabList?.map((route: any, index: number) => {
          const isRouteActive = index === activeTab;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          const customContainer = isRouteActive ? Colors.lightBlue : Colors.lightPurple;
          return (
            <TouchableWithoutFeedback
              onPress={() => onChangeTab(index)}
              key={route.routeName}>
              <View style={[styles.activetabContainer, { backgroundColor: customContainer }]}>
                <Text
                  style={{
                    fontSize: 14,
                    color: `${tintColor}`,
                    fontWeight: "bold"
                  }}
                >
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: verticalScale(10)
  },
  textContainer: {
    marginVertical: 30,
    paddingTop: 30
  },
  textWhite: {
    color: "black"
  },
  tabContainer: {
    backgroundColor: Colors.lightPurple,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
    borderRadius: 25
  },
  activetabContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 15,
    height: 35
    // padding: ,
  }
});

export default CustomTabView;