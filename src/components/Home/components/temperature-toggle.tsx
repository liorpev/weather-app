import React from "react";

interface TemperatureToggleProps {
  value: string;
  onChange: (value: string) => void;
}

const TemperatureToggleComponent = ({
  value,
  onChange,
}: TemperatureToggleProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600 font-medium">Units</label>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="temp-c"
          name="temperature"
          value="C"
          checked={value === "C"}
          onChange={handleChange}
          className="sr-only peer/celsius"
        />
        <label
          htmlFor="temp-c"
          className="text-lg font-medium peer-checked/celsius:underline cursor-pointer"
        >
          °C
        </label>

        <span className="text-lg text-gray-400">|</span>

        <input
          type="radio"
          id="temp-f"
          name="temperature"
          value="F"
          checked={value === "F"}
          onChange={handleChange}
          className="sr-only peer/fahrenheit"
        />
        <label
          htmlFor="temp-f"
          className="text-lg font-medium peer-checked/fahrenheit:underline cursor-pointer"
        >
          °F
        </label>
      </div>
    </div>
  );
};

export const TemperatureToggle = React.memo(
  TemperatureToggleComponent,
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);
