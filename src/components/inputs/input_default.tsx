interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputDefault = ({ label, ...props }: InputDefaultProps) => {
  const { id } = props;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="label-style">
        {label}
      </label>
      <input className="input-style" {...props} />
    </div>
  );
};
