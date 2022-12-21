import React from "react";


function Teams(){
  return (
    <div id="teams" className="container ">
      <h1 className="happy">theHAPPYReader Team</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum." 
      </p>
      <br/>
      <div id="team-members" className="row d-flex g-5">
        <div className="col">
            <div className="card h-100" style={{width: "450px"}}>
            <img className="card-img-top" src="user1.jpg" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Eunice Petipit</h5>
                <p className="card-text">CHIEF EDITOR</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100" style={{width: "450px"}}>
            <img className="card-img-top" src="user2.jpg" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Prince Uriel</h5>
                <p className="card-text">DATABASE MANAGER</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100" style={{width: "450px"}}>
            <img className="card-img-top" src="user2.jpg" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Lemuel Meneses </h5>
                <p className="card-text">CONTENT WRITER</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100" style={{width: "450px"}}>
            <img className="card-img-top" src="user2.jpg" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Mark Estrella</h5>
                <p className="card-text">RESEARCHER</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
   }
export default Teams;