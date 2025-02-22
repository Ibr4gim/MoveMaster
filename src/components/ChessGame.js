import React, { useState } from "react";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import "bootstrap/dist/css/bootstrap.min.css";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);

  const handleSquareClick = (square) => {
    if (selectedSquare === square) {
      setSelectedSquare(null);
      setPossibleMoves([]);
      return;
    }

    const moves = game.moves({ square, verbose: true });
    setSelectedSquare(square);
    setPossibleMoves(moves.map((move) => move.to));
  };

  const makeMove = ({ sourceSquare, targetSquare }) => {
    const newGame = new Chess(game.fen());
    const move = newGame.move({ from: sourceSquare, to: targetSquare });

    if (move) {
      setGame(newGame);
      setFen(newGame.fen());
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="mb-3">MoveMaster</h1>
      <Chessboard
        position={fen}
        onClickSquare={handleSquareClick}
        onDrop={({ sourceSquare, targetSquare }) =>
          makeMove({ sourceSquare, targetSquare })
        }
        squareStyles={{
          ...(selectedSquare
            ? {
                [selectedSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
              }
            : {}),
          ...possibleMoves.reduce((acc, square) => {
            acc[square] = { backgroundColor: "rgba(0, 255, 0, 0.4)" };
            return acc;
          }, {}),
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          setGame(new Chess());
          setFen("start");
          setSelectedSquare(null);
          setPossibleMoves([]);
        }}
      >
        Перезапуск
      </button>
    </div>
  );
};

export default ChessGame;
