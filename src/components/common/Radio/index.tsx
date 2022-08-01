import { ChangeEvent, FC, ReactNode, useId } from "react";
import classes from "../../../utils/classes";
import "./style.scss";

interface RadioProps {
  children: ReactNode;
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
}

const Radio: FC<RadioProps> = ({
  children,
  name,
  value,
  onChange,
  checked,
  disabled,
  className,
}) => {
  const id = useId();
  const classNames = classes(["radio-label-default", className]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e, value);

  return (
    <>
      <input
        id={id}
        className="radio-input-default"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={id} className={classNames}>
        {children}
      </label>
    </>
  );
};

export default Radio;
