// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import ProductViewer from "./components/ProductViewer";
import {Hero,Navbar,ProductViewer} from "./components";

export default function App() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <ProductViewer/>
        </main>
    )
}