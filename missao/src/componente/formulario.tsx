import React from "react";

function Coletor(){
    return(
    
    <>
    <div className="container text-center">
<div className="col-5">
  <label className="form-label"> Titulo</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="titulo do titulo"/>
</div>
<div className="col-6">
  <label className="form-label"> Resumo</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
</div>
<br></br>
<div className="col-7">
<select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className="col-8">
  <label className="form-label">Autores</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
</div>   
</div> 
    </>
    )
}

export default Coletor;