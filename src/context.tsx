import React, { createContext, useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import Config, { UserConfig } from "./theme/Config";
import defaultConfig from "./theme/defaultConfig";
import { getTextStyleSheet } from "./stylesheets/textStyleSheet";
import { mergeConfig } from "./scripts/mergeConfig";

const RnFnContext = createContext<{ textStyles: StyleSheet; config: Config }>(
  null as never
);

export function RnFnProvider({
  config,
  children,
}: {
  config?: UserConfig;
  children: React.ReactNode;
}) {
  const mergedConfig = config ? mergeConfig(config) : defaultConfig;
  const textStyles = useMemo(() => getTextStyleSheet(mergedConfig), [
    mergedConfig,
  ]);

  return (
    <RnFnContext.Provider value={{ textStyles, config: mergedConfig }}>
      {children}
    </RnFnContext.Provider>
  );
}

export function useRnfnStyles() {
  return useContext(RnFnContext);
}
