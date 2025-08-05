type SquareProps = {
  value: string | null;
};

function Square({ value }: SquareProps) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('click', e)
  } 

  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default Square