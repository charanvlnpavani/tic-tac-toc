import './GameBoard.css'
export default function GameBoard({onSelectSquare, board }){
   
   
    return(
        <>
            <ol id="game_board" className="game_board">
                {board.map((row, rowIndex) => <li className="row"key={rowIndex}>
                        <ol className='olCol'>
                            {row.map((playerSymbol,colIndex) => <li className="col" key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>)}
                        </ol>
                    </li>)
                }
            </ol>
        </>
    );
}