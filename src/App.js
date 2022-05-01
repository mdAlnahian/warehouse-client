import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Page/Footer/Footer";
import Header from "./Page/Header/Header";
import Home from "./Page/Home/Home";
import Items from "./Page/Items/Items";
import ItemDetails from "./Page/ItemDetails/ItemDetails";
import Login from "./Page/Login/Login/Login";
import Register from "./Page/Login/Register/Register";
import RequireAuth from "./Page/RequireAuth/RequireAuth";
import AddItem from "./Page/AddItem/AddItem";
import ManageItem from "./Page/ManageItem/ManageItem";
import ExtraOne from "./Page/ExtraOne/ExtraOne";
import ExtraTwo from "./Page/ExtraTwo/ExtraTwo";
import NotFound from "./Page/NotFound/NotFound";
import Blog from "./Page/Blog/Blog";




function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/exOne" element={<ExtraOne></ExtraOne>}></Route>
        <Route path="/exTwo" element={<ExtraTwo></ExtraTwo>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
