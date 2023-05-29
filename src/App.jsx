import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setLoading]=useState(true)
  const [tours,setTour]=useState([])
  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>{
      return tour.id!==id

    })
    setTour(newTours)
  }
  const fetchTours=async ()=>{
    setLoading(true)
    try {
      const response=await fetch(url)
    // console.log(response)
    const tours=await response.json()
    console.log(tours)
    setTour(tours)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    
  } 
  useEffect(()=>{
    

fetchTours()
  },[])
 if (isLoading) {
  return <main>
    <Loading />
  </main>
 }
//  TODO: 
if (tours.length===0) {
  return <main>
<div className="title">
  <h2>Nothing Left</h2>
  <button className="btn" style={{marginTop:'2rem'}} onClick={()=>fetchTours}>refresh</button>
</div>

  </main>
}
return (
  <main>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </main>
)
};
export default App;
