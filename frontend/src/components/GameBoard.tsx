const GameBoard = ({board}: {board : JSON}) => {
  return (
    <div  className="w-1/4 grid grid-cols-10 gap-1">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className="border border-black text-center"
        >
          {100 - i}
        </div>
      ))}
      
      {/* Just used the following line to avoid error */}
      <div>{JSON.stringify(board)}</div>
    </div>
  );
};

export default GameBoard;