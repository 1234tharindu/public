import ERPLogo from '../images/erp-logo.png';

export default function Header(){
    return(
        <>        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#f0f0f0"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={ERPLogo} alt="Logo" style={{ width: "50px", marginRight: "10px" }} />
        <h1>NWSDB</h1>
      </div>
      <div>
        <p>{`Emp No: 123456`}</p>
        <p>{`Emp Name: A.D.Perera`}</p>
      </div>
    </div>
    </>
    )
}