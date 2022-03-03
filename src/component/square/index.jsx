
const Square = ({start, time, handleStart}) => {

  return (
    <div className="square" onClick={() => handleStart(time)}>
      {start}
    </div>
  )
}
export default Square