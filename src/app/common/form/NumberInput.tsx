import React from "react";
import NumberFormat from "react-number-format";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<number, HTMLElement>,
    FormFieldProps {}

const InputNumber: React.FC<IProps> = ({
  classes,
  placeholder,
  title,
  input,
  width,
  type,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width}>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
      >
        <label>{title}</label>
        <input {...input} placeholder={placeholder} />
      </div>
    </Form.Field>
  );
};

export default (InputNumber);

// className="input-number"
// thousandSeparator={true}
// onValueChange={(values) => {
//   const { formattedValue, value } = values;
//   setValues(parseInt(value));
// }}
