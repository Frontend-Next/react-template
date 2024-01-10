import { MultiStateButton } from "components/MultiStateButton";
import { FC } from "react";

export const Demo: FC = () => {
  return (
    <>
      <h1>Demo Page</h1>

      <MultiStateButton
        value={ProductColor.WHITE}
        states={[
          { value: ProductColor.RED, label: "Red" },
          { value: ProductColor.BLUE, label: "Blue" },
          { value: ProductColor.WHITE, label: "WHITE" },
          { value: ProductColor.YELLOW, label: "YELLOW" },
        ]}
        onValueChangeHandler={(newValue) =>
          console.log("onValueChange", newValue)
        }
      />
    </>
  );
};

enum ProductColor {
  RED = "RED",
  BLUE = "BLUE",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}
