
const Start = (props) => {
  const { handleStart } = props;
  return (
    <div className="start" onClick={() => handleStart() }>
      Novo Jogo
    </div>
  )
}
export default Start