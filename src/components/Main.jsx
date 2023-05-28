import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import LogIn from "../pages/LogIn";

export default function Main() {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="*" element={<RepositoryList />} />
      </Routes>
    </View>
  );
}
