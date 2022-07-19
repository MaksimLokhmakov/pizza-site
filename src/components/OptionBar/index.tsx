import {
  ChangeEvent,
  FC,
  Fragment,
  memo,
  useState,
  useLayoutEffect,
} from "react";
import { Radio, Chip } from "../common";
import "./style.scss";

export interface IOption {
  name: string;
  value: number;
  disabled?: boolean;
}

interface OptionBarProps {
  barName: string;
  options: IOption[];
  currentOption: number;
  onChange: (current: number) => void;
}

const OptionBar: FC<OptionBarProps> = ({
  currentOption,
  options,
  barName,
  onChange,
}) => {
  const [checkedMarkerTranslateX, setCheckedMarkerTranslateX] = useState(
    currentOption * 100
  );
  const checkedMarkerWidth = (1 / options.length) * 99 + "%";

  const handleChange = (e: ChangeEvent<HTMLInputElement>, value: number) => {
    setCheckedMarkerTranslateX(value * 100);
    onChange(Number(e.target.value));
  };

  const nullify = () => {
    setCheckedMarkerTranslateX(0);
    onChange(options[0].value);
  };

  useLayoutEffect(() => {
    options.forEach((option) => {
      const isCurrentOptionDisabled =
        option.disabled && option.value === currentOption;

      if (isCurrentOptionDisabled) {
        nullify();
      }
    });
  }, [options]);

  return (
    <div className="optionbar">
      {options.map(({ value, name, disabled }, index) => {
        const checked = currentOption == value;
        const isLastElement = options.length - 1 === index;

        const checkedMarkerStyle = {
          width: checkedMarkerWidth,
          transform: `translateX(${checkedMarkerTranslateX + "%"})`,
        };

        return (
          <Fragment key={value}>
            <Radio
              name={barName}
              value={value}
              className="optionbar-radio-label"
              onChange={handleChange}
              checked={checked}
              disabled={disabled}
            >
              {name}
            </Radio>

            {isLastElement && (
              <Chip
                style={checkedMarkerStyle}
                className="checked-marker"
                ariaHidden={true}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(OptionBar);
