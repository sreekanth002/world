import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const navigate = useNavigate();


  const moveToNext = () =>{
    navigate("/home")
  }
  return (
    <>
      <h1>Dashboard</h1>
      <p>Heavy dashboard content</p>
      <button onClick={moveToNext}>next</button>
    </>
  );
}