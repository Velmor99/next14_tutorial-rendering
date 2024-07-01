"use client";

import React from "react";
import { useTheme } from "../../components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div className="image-slider-container">
      <h1 style={{ color: theme.colors.primary }}>Client-side {result}</h1>
    </div>
  );
}
