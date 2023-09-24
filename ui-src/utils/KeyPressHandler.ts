import React from "react";

const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter" || event.key === "Escape") {
    event.preventDefault();
    event.currentTarget.blur();
  }
}

export default keyPressHandler