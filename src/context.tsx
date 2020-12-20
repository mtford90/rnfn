import React, { createContext, useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import Config from "./theme/Config";
import defaultConfig from "./theme/defaultConfig";
import { getTextStyleSheet } from "./stylesheets/textStyleSheet";

const RnFnContext = createContext<{ textStyles: StyleSheet }>(null as never);

export function RnFnProvider({
  config = defaultConfig,
  children,
}: {
  config?: Config;
  children: React.ReactNode;
}) {
  const textStyles = useMemo(() => getTextStyleSheet(config), [config]);

  return (
    <RnFnContext.Provider value={{ textStyles }}>
      {children}
    </RnFnContext.Provider>
  );
}

export function useRnfnStyles() {
  return useContext(RnFnContext);
}
