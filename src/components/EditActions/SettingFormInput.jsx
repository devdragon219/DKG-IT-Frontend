import { SETTINGS_LABELS } from "../../constants/settings";
import { useEffect, useState } from "react";
import FormInput from "../FormInput";

export const SettingFormInput = ({ value, label, handleSettingBlur }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;

    if (reg.test(inputValue) || !label.includes('olor')) {
      setError(false);
    } else {
      setError(true);
    }
  }, [inputValue]);

  return (
    <FormInput
      value={inputValue}
      label={SETTINGS_LABELS[label]}
      error={error}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={(e) => handleSettingBlur(inputValue, label)}
    />
  );
};
