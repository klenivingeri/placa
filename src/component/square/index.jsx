
const Square = ({start, time, handleStart, handleRemove}) => {

  return (
    <div className="placar">
    <div className="square" onClick={() => handleStart(time)}>
      {start}
    </div>
    <div className="btn" onClick={() => handleRemove(time)}>- 1</div>
    </div>
  )
}
export default Square