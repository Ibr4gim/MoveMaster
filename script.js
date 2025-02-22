const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'snapback',
    position: 'start'
});

const game = new Chess();

document.getElementById('randomMove').addEventListener('click', () => {
    const moves = game.moves();
    if (moves.length === 0) return;
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    game.move(randomMove);
    board.position(game.fen());
});
