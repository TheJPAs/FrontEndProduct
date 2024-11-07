import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HeaderComponent from "./components/organisms/HeaderComponent";
import ProductListComponent from "./components/organisms/ProductListComponent";
import AddProductComponent from "./components/organisms/AddProductComponent";

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<ProductListComponent/>}></Route>
        <Route path="/products" element={<ProductListComponent/>}></Route>
        <Route path="/add-product" element={<AddProductComponent/>}></Route>
        <Route path="/edit-product/:id" element={<AddProductComponent/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
