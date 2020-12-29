import React, { createContext, useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import Config, { UserConfig } from "./theme/Config";
import defaultConfig from "./theme/defaultConfig";
import { getTextStyleSheet } from "./stylesheets/textStyleSheet";
import { mergeConfig } from "./scripts/mergeConfig";
import { getViewStyleSheet } from "./stylesheets/viewStyleSheet";

const RnFnContext = createContext<{
  textStyles: StyleSheet;
  viewStyles: StyleSheet;
  config: Config;
}>(null as never);

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
  const viewStyles = useMemo(() => getViewStyleSheet(mergedConfig), [
    mergedConfig,
  ]);

  return (
    <RnFnContext.Provider
      value={{ textStyles, viewStyles, config: mergedConfig }}
    >
      {children}
    </RnFnContext.Provider>
  );
}

export function useRnfnStyles() {
  return useContext(RnFnContext);
}
