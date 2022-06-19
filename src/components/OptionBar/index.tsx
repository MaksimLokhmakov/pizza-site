import { ChangeEvent, FC, Fragment, memo, useState } from "react";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";
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
  const [checkedMarkerTranslateX, setCheckedMarkerTranslateX] = useState(0);
  const checkedMarkerLength = (1 / options.length) * 99 + "%";

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCheckedMarkerTranslateX(index * 100);
    onChange(e.target.value);
  };

  const nullify = () => {
    setCheckedMarkerTranslateX(0);
    onChange(options[0].value.toString());
  };

  useEffectSkipMount(() => {
    options.forEach((option) => {
      const isCurrentOptionDisabled =
        option.disabled && option.value === currentOption;

      if (isCurrentOptionDisabled) {
        nullify();
      }
    });
  }, [options]);

  return (
    <div className="wrapper df">
      {options.map(({ value, name, disabled }, index) => {
        const id = Math.random().toString();
        const checked = currentOption === value;
        const isLastElement = options.length - 1 === index;

        return (
          <Fragment key={value}>
            <input
              type="radio"
              id={id}
              name={barName}
              value={value}
              className="wrapper-input dn"
              onChange={(e) => handleChange(e, index)}
              checked={checked}
              disabled={disabled}
            />

            <label htmlFor={id} className="wrapper-option df">
              {name}
            </label>

            {isLastElement && (
              <div
                className="checked-marker"
                style={{
                  width: checkedMarkerLength,
                  transform: `translateX(${checkedMarkerTranslateX + "%"})`,
                }}
                aria-hidden="true"
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(OptionBar);
