type SquareProps = {
  value: string | null;
  disabled: boolean | null
  onValueChanged: () => void;
};

function Square({ value, disabled, onValueChanged }: SquareProps) {
  return <button className="square" onClick={onValueChanged} disabled={!!disabled}>{value}</button>;
}

export default Square
