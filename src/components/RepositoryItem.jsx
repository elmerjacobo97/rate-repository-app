import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { theme } from "../theme";
import RepositoryDetails from "./RepositoryDetails";

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
      </View>
      <RepositoryDetails item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.s,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.round,
  },
  headerText: {
    flex: 1,
    marginLeft: theme.spacing.s,
  },
  fullName: {
    fontSize: theme.fontSizes.h3,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  description: {
    flex: 1,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
});

export default RepositoryItem;
