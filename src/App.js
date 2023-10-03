import MenuBar from "./components/Menubar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from "./components/Pictures";
function App() {
  return (
    <>
  <MenuBar />
  <UncontrolledExample />
  <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
  <h1>Welcome to Our Store</h1>
  <h3>"Where Comfort Meets Style."</h3>
  <p>"Discover timeless elegance and impeccable craftsmanship in our furniture store. Our curated collection blends artistry and comfort, uniting form and function to enrich your living spaces.<br/>
Explore textures, colors, and styles that harmonize seamlessly. From classic warmth to modern allure, our store caters to diverse tastes. Our knowledgeable staff helps you find pieces that fit your space and resonate with your soul.<br/>
Turn your house into a home that reflects your unique personality and values. Let us be your partner in creating inspiring spaces, where every piece tells a story, and your vision of a beautiful, harmonious home comes to life."</p>
</div>
    </>
  );
}

export default App;
