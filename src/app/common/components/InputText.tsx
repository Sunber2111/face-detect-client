import React from "react";
import { Input } from "semantic-ui-react";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
  size?: "big" | "small" | "mini" | "large" | "huge" | "massive" | undefined;
}

const InputText: React.FC<IProps> = ({
  title,
  value,
  setValue,
  size,
  children,
}) => {
  const styles:React.CSSProperties = children
    ? { display: "flex", flexDirection: "column" }
    : { display: "flex", flexDirection: "column", marginBottom: "10px" };

  return (
    <div className="d-flex f-row ali-cen">
      <div className="w-100" style={styles}>
        {title && <label>{title}</label>}
        <Input
          value={value}
          className="w-100"
          onChange={(e, { value }) => setValue(value)}
          size={size}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InputText;
