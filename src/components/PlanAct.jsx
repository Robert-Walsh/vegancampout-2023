function PlanAct({stage, name, time, mustSee, mightSee, clash}){
  const mustSeeBox = (
    <div style={{'backgroundColor': '#b8e994', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Must See
      </div>
    </div>
  )

  const mightSeeBox = (
    <div style={{'backgroundColor': '#fffa65', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Might See
      </div>
    </div>
  )

  const clashBox = (
    <div style={{'backgroundColor': '#e74c3c', 'color': '#ecf0f1', 'borderRadius': '4px', 'textAlign': 'center', 'width': '18%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Clash
      </div>
    </div>
  )

  return (
    <div>
      <div style={{'padding': '4px', 'marginLeft': '10px', 'marginTop': '0px'}}>
        <div style={{'fontWeight':'bold'}}>
          {name.toUpperCase()}
        </div>
        <div>
          {stage.toUpperCase()}
        </div>
        <div>
          {time}
        </div>
        {mustSee && mustSeeBox}
        {mightSee && mightSeeBox}
        {clash && clashBox}
       <hr/>
      </div>
      
    </div>
  )
}

export default PlanAct
