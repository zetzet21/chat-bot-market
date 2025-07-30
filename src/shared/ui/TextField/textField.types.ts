import React, { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  hasFrontIcon?: boolean;
  hasBackIcon?: boolean;
}
