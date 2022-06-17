import { ChangeEvent, FC, Fragment, memo } from "react";
import "./style.scss";

export interface IOption {
  name: string;
  value: string | number;
  disabled?: boolean;
}

interface OptionBarProps {
  barName: string;
  options: IOption[];
  currentOption: string | number;
  onChange: (current: string) => void;
}

const OptionBar: FC<OptionBarProps> = ({
  currentOption,
  options,
  barName,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="wrapper df">
      {options.map(({ value, name }) => {
        const id = name;
        const checked = currentOption === value;

        return (
          <Fragment key={value}>
            <input
              type="radio"
              id={id}
              name={barName}
              value={value}
              className="dn"
              onChange={handleChange}
              checked={checked}
            />
            <label htmlFor={id} className="wrapper-option df">
              {name}
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(OptionBar);
