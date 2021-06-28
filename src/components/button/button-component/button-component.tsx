import { ButtonHTMLAttributes } from "react";

import "../../../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button = ({ isOutlined, ...rest }: ButtonProps) => {
  return (
    <button
      className={`button-component ${isOutlined && "outlined"}`}
      {...rest}
    />
  );
};
