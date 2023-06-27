function Act({stage, name, time, day, mustSee, mightSee, onClick}){
  const handleClick = () => {
    onClick({name, time, stage, day, mustSee, mightSee})
  }

  let backgroundColor

  if(mustSee){
    backgroundColor = '#b8e994' 
  }
  else if(mightSee){
    backgroundColor = '#fffa65'
  }
  else{
    backgroundColor = ''
  }

  return (
    <div onClick={handleClick} style={{'cursor': 'pointer', 'backgroundColor': backgroundColor, 'marginLeft': '10px', 'borderRadius': '4px', 'border': 'solid 1px grey', 'boxShadow': '0 8px 6px -6px black', 'marginBottom': '10px', 'height':'auto'}}>
      <div style={{'fontWeight':'bold', 'padding': '3px'}}>
        {name.toUpperCase()}
      </div>
      <div style={{ 'padding': '3px'}}>
        {time}
      </div>
      <div/>
    </div>
  )
}

export default Act