import { mergeProps, useObjectRef } from '@react-aria/utils';
import { ChangeEventHandler, ComponentProps, forwardRef, ReactNode } from 'react';
import { AriaNumberFieldProps, useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

import { styles } from './NumberField.css';

interface NumberFieldProps extends Omit<AriaNumberFieldProps, 'onChange' | 'defaultValue'> {
  label: string;
  description?: string;
  errorMessage?: string;
  disabled?: boolean;
  defaultValue?: number | null;
  suffix?: ReactNode;
  prefix?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ label, disabled, defaultValue, onChange, suffix, prefix, ...props }, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const { locale } = useLocale();

    const defaultValueProp = defaultValue ? { defaultValue } : {};

    const state = useNumberFieldState({ ...props, ...defaultValueProp, locale });
    const { labelProps, inputProps } = useNumberField(props, state, ref);

    const dataInput = suffix
      ? { 'data-input': 'suffix' }
      : prefix
      ? { 'data-input': 'prefix' }
      : {};

    return (
      <LabelField label={label} {...labelProps}>
        {/* INPUT DESCRIPTION */}

        <div className={styles.inputWrapperBase}>
          <InputBase
            {...mergeProps(inputProps, { onChange })}
            errorMessage={props.errorMessage}
            disabled={disabled}
            ref={ref}
            {...dataInput}
          />
        </div>
      </LabelField>
    );
  }
);

NumberField.displayName = 'NumberField';

type NumberFieldSchema = ComponentProps<typeof NumberField>;

export { NumberField, type NumberFieldSchema };
