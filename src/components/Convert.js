import React, { useState, useEffect } from "react";

export default function Convert({ language, text }) {
  useEffect(() => {
    console.log("New lan or text");
  }, [language, text]);
  return null;
}
