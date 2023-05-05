import { ComponentProps, forwardRef } from 'react';

import { styles } from './InputBase.css';

interface InputBaseProps extends ComponentProps<'input'> {
	disabled?: boolean;
	errorMessage?: string;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
	({ disabled, errorMessage, ...props }, ref) => {
		const inputElStateStyle = () => {
			if (errorMessage) {
				return `${styles.inputEl} ${styles.inputElState.warning}`;
			}

			if (disabled) {
				return `${styles.inputEl} ${styles.inputElState.disabled}`;
			}

			return `${styles.inputEl} ${styles.inputElState.initial}`;
		};

		return <input {...props} className={inputElStateStyle()} disabled={disabled} ref={ref} />;
	}
);

InputBase.displayName = 'InputBase';

export { InputBase };
