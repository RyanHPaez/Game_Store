import Card from "react-bootstrap/Card"

export default function Header() {
    return (
        
        <Card style={{ width: '100%', 
        backgroundImage: "url(https://www.ask.com/wp-content/uploads/sites/3/2021/11/e67af4c685145fd3374375d03bdab77a.jpg)", 
        height: "550px", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "right", 
        backgroundColor: "#DFEED6", 
        
        backgroundSize: "800px 500px" }}>
            <Card.Body style={{ 
                textAlign: "left", 
                width: "400px",
                
                marginLeft: "50px", 
                marginTop: "0px" }}>
                <Card.Title style={{ 
                    fontSize: "60px" }}
                    >Order you games for pickup today!
                    </Card.Title>
                <Card.Subtitle style={{ 
                    fontSize: "15px" }} 
                    className="mb-2 text-muted"
                    >The best Games are found here.</Card.Subtitle>   
                
        <form>
            <input 
                // ref={term}
                type="text" 
                placeholder='Enter Game Search Here' 
            />
            <button onClick={() =>{}}>Submit</button>
        </form>
    
            </Card.Body>
        </Card>
    )
}