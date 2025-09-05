import bg from "./assets/bg.jpg";
import Header from "./components/Header";
const HomgePage = ()=>{
    return (
        <main
            style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "fit",
        minHeight: "100vh", // full screen height
        width: "100%",
        
      }}
      >
        <Header />
      <h1></h1>
            
        </main>
        
    )
}
export default HomgePage;