const Dice = ({rollDice} : {rollDice : () => void}) => {
  return <button onClick={rollDice}>Roll Dice</button>;
};

export default Dice;