import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");

  const handleMove = (move) => {
    const newGame = new Chess(game.fen());
    const result = newGame.move(move);

    if (result) {
      setGame(newGame);
      setFen(newGame.fen());
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h2>Chess Trainer</h2>
      <Chessboard
        position={fen}
        onDrop={({ sourceSquare, targetSquare }) =>
          handleMove({ from: sourceSquare, to: targetSquare })
        }
      />
    </div>
  );
};

export default ChessBoard;
