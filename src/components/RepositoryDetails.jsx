import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { theme } from "../theme";
import parseThousands from "../utils";

const RepositoryDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <DetailRow label="Language" value={item.language} />
      <DetailRow label="Forks" value={parseThousands(item.forksCount)} />
      <DetailRow label="Rating" value={item.ratingAverage} />
      <DetailRow label="Reviews" value={item.reviewCount} />
      <DetailRow label="Stars" value={parseThousands(item.stargazersCount)} />
    </View>
  );
};

const DetailRow = ({ label, value }) => {
  return (
    <View style={styles.detailsRow}>
      <Text style={styles.detailsLabel}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.detailsValue}>{value}</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.s,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  detailsRow: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing.s,
    width: windowWidth < theme.breakpoints.tablet ? "50%" : "auto",
  },
  detailsLabel: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
    textTransform: "capitalize",
  },
  valueContainer: {
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.s,
    backgroundColor: theme.colors.primaryLight,
  },
  detailsValue: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
});

export default RepositoryDetails;
