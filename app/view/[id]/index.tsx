import React from "react";
import { useLocalSearchParams } from "expo-router";
import ViewScreen from "../../../src/screens/View";
const view = () => {
  const { id } = useLocalSearchParams();

  return <ViewScreen id={id as string} />;
};

export default view;
