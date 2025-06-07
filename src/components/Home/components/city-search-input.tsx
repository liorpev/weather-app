import { useRef, useState, useEffect } from "react";
import { XIcon } from "../../icons/x-icon";

interface CitySearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CitySearchInput = ({ value, onChange }: CitySearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(localValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [localValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Search
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          value={localValue}
          onChange={handleChange}
          placeholder="Type to search"
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />

        <button
          type="button"
          onClick={() => {
            onChange("");
            setLocalValue("");
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};
