"use client"
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Home from "./home/page";
import Sale from "./sale/page";
import SignIn from "./sign in/page";
import JoinUs from "./join us/page";
import Help from "./help/page";
import ProductDetails from "./product/page"
import Checkout from "./checkout/page";
import CartPage from "./cart/page";
import Footer from "./components/Footer";

export default function MainPage() { 
  const routs = useRouter()
  return (
    <div>
      <Header />
      <Home />
      <Sale />
      <ProductDetails />
      <SignIn/>
      <JoinUs />
      <Help />
      <CartPage />
      <Checkout />  
  <Footer /> 
    </div>
  );
  }
