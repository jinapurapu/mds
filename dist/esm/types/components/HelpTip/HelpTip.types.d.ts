import React from "react";
export interface HelpTipProps {
  children: any;
  helptip: React.ReactElement;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}
export interface HelpTipBuild {
  placement: "bottom" | "left" | "right" | "top";
}
export interface HelpTipConstructProps {
  placement: "bottom" | "left" | "right" | "top";
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
