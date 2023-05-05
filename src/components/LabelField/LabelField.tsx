import { LabelHTMLAttributes, ReactNode } from 'react';

import { styles } from './LabelField.css';

interface LabelFieldProps {
	label: string;
	props?: LabelHTMLAttributes<HTMLLabelElement>;
	children: ReactNode | ReactNode[];
}

function LabelField({ children, label, ...props }: LabelFieldProps) {
	return (
		<label {...props} className={styles.label}>
			<div className={styles.labelName}>{label}</div>

			{children}
		</label>
	);
}

export { LabelField };
