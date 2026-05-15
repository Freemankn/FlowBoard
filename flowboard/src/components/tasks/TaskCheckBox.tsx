import { Square, SquareCheck } from "lucide-react";

type TaskCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function TaskCheckbox({ checked, onChange }: TaskCheckboxProps) {
  return (
    <label className="task-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="task-checkbox-input"
      />

      {checked ? <SquareCheck size={20} /> : <Square size={20} />}
    </label>
  );
}