import React, { createContext, useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import Config from "./theme/Config";
import defaultConfig from "./theme/defaultConfig";
import generateTextStyles from "./stylesheets/generateTextStyles";

const RnFnContext = createContext<{ textStyles: StyleSheet }>(null as never);

export function RnFnProvider({
  config = defaultConfig,
  children,
}: {
  config?: Config;
  children: React.ReactNode;
}) {
  const textStyles = useMemo(
    () => StyleSheet.create(generateTextStyles(config)),
    [config]
  );

  return (
    <RnFnContext.Provider value={{ textStyles }}>
      {children}
    </RnFnContext.Provider>
  );
}

export function useRnfnStyles() {
  return useContext(RnFnContext);
}
