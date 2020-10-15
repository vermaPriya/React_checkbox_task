import React from 'react';
import { useCheckboxState, Checkbox } from "reakit/Checkbox";

const UserList=() =>{
  const checkbox = useCheckboxState({ state: [] });
  const checkbox1 = useCheckboxState({ state: [] });
  const checkbox2 = useCheckboxState({ state: [] });



  return (
    <div className="row main-row">
      <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
              <label className="label-name">Portugal</label>
              <label className="labelStyle">
                <Checkbox {...checkbox} value="Sam" className="checkboxStyle"/>
                Sam
              </label>
              <label className="labelStyle">
                <Checkbox {...checkbox} value="Harry" className="checkboxStyle" />
                Harry
              </label>
              <label className="labelStyle">
                <Checkbox {...checkbox} value="Mohit" className="checkboxStyle"/>
                Mohit
              </label> <label className="labelStyle">
                <Checkbox {...checkbox} value="Rohit" className="checkboxStyle"/>
                Rohit
              </label> 
              <label className="label-name">Nicaragua</label>    
              <label className="labelStyle">
                <Checkbox {...checkbox1} value="Daniel" className="checkboxStyle"/>
                Daniel
              </label> <label className="labelStyle">
                <Checkbox {...checkbox1} value="Rahul" className="checkboxStyle"/>
                Rahul
              </label> <label className="labelStyle">
                <Checkbox {...checkbox1} value="Max" className="checkboxStyle"/>
                Max
              </label> <label className="labelStyle">
                <Checkbox {...checkbox1} value="Alex" className="checkboxStyle"/>
                Alex
              </label>     
              <label className="label-name">Marshall Islands</label>    
              <label className="labelStyle">
                <Checkbox {...checkbox2} value="Dazy" className="checkboxStyle"/>
                Dazy
              </label> <label className="labelStyle">
                <Checkbox {...checkbox2} value="Rohan" className="checkboxStyle"/>
                Rohan
              </label> <label className="labelStyle">
                <Checkbox {...checkbox2} value="Amit" className="checkboxStyle"/>
                Amit
              </label> <label className="labelStyle">
                <Checkbox {...checkbox2} value="Annie" className="checkboxStyle"/>
                Annie
              </label>     
            </div>
        </div>
      </div>
        <div className="col-sm-6">
          <div className="card">
          {checkbox.state[0] !== checkbox1.state[0] || checkbox2.state[0] ?<div style={{textAlign:'center'}}>
            <div className="card-body">
            {checkbox.state[0]? <label className="label-name">Portugal</label>:''}
              {checkbox.state.map((val,index)=> <div key={index} className="mb-1"><span  className="roles ml-2 mb-2">{val} </span><hr/></div>)}    
            </div> 
            <div className="card-body">
            {checkbox1.state[0]? <label className="label-name">Nicaragua</label>:''}  
            {checkbox1.state.map((val,index)=> <div key={index} className="mb-1"><span  className="roles ml-2 mb-2">{val}</span><hr/></div>)}
          </div>
          <div className="card-body">
            {checkbox2.state[0]? <label className="label-name">Marshall Islands</label>:''}  
            {checkbox2.state.map((val,index)=> <div key={index} className="mb-1"><span  className="roles ml-2 mb-2">{val}</span><hr/></div>)}
          </div>
          </div>:<span style={{textAlign:'center', padding:'49px'}} >No Value Selected</span>}
          </div>
        </div>
    </div>
   
    
  )
}
export default UserList;
