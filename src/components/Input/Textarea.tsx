import { useFormContext, type RegisterOptions } from "react-hook-form";
import ExclamationCircleIcon from "@heroicons/react/24/solid/ExclamationCircleIcon";
import ErrorText from "~/components/Typography/ErrorText";

export type TextareaProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"input">;

export default function Textarea({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  validation,
  ...rest
}: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text text-base-content">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered"
        {...register(id, validation)}
        {...rest}
        name={id}
        id={id}
        readOnly={readOnly}
        placeholder={placeholder}
        aria-describedby={id}
      />
      {errors[id] && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="text-xl text-red-500" />
        </div>
      )}
      <ErrorText helperText={helperText} errors={errors} id={id} />
    </div>
  );
}
