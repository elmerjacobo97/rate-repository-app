import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { theme } from "../theme";
import Constants from "expo-constants";
import { useNavigate, useLocation } from "react-router-native";

function AppBarTab({ children, to }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === to;

  const handlePress = () => {
    navigate(to);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.tab, isActive && styles.activeTab]}
      activeOpacity={0.7}
    >
      <Text style={[styles.title, isActive && styles.activeTitle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryDark,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  tab: {
    marginRight: 15,
    borderRadius: theme.borderRadius.s,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.s,
  },
  activeTab: {
    backgroundColor: theme.colors.primaryLight,
  },
  title: {
    color: theme.colors.surface,
    fontSize: theme.fontSizes.h3,
    fontWeight: theme.fontWeights.medium,
  },
  activeTitle: {
    color: theme.colors.primary,
  },
});
