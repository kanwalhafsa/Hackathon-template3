import Image from "next/image";
import { TbMessage } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Checkout = () => {
    return (
        <div className="flex justify-center items-center bg-white py-10">
            <div className="w-[90%] max-w-[1411px]">
                {/* Header */}
                <header className="bg-white border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-4">
                    {/* Logo Section */}
                    <div className="flex items-center mr-auto">
                        <Image
                            src="/images/img2.png"
                            alt="Logo"
                            width={62}
                            height={21}
                            className="object-contain"
                        />
                    </div >

                    {/* Number Section */}
                    <div className="flex items-center space-x-6 ml-auto">
                        <span className="text-black font-medium">000 800 100 9538</span>
                    </div>
                    <div>
                    <TbMessage className="flex w-7 h-7 ml-9"/>
                    </div>
                    <div>
                        <IoBagOutline  className="flex w-7 h-7 ml-9"/>
                    </div>
                </header>
                {/* Main Content */}
                <div className="flex mt-10 gap-10">
                    {/* Left Side */}
                    <div className="w-1/2 p-5 shadow-md">
                        {/* Heading */}
                        <h1 className="text-2xl font-semibold text-black mb-4">
                            How would you like to get your order?
                        </h1>

                            <p className="text-[#757575]">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className="font-medium underline decoration-24 decoration-solid"> Learn More </span></p>
                        {/* Box */}
                         <div className="flex border-2 rounded-2xl border-black w-full h-20  mt-10 mb-15 ml-25 ">
                            <div><Image className="flex w-21 h-19 ml-9 mt-5 justify-between"
                            src="/images/Dicon.png"
                            alt=""
                            width={24}
                            height={24}></Image></div>

                            <h2 className="font-medium text-lg ml-25 mt-5 mb-5">Deliver it</h2>
                        </div>
                        <div> 
         

                            <h3 className="flex text-2xl font-semibold mt-16">Enter your name and address:</h3>
                            <form className="flex flex-col w-full mt-11">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold" 
    type="text" 
    placeholder="First Name" 
  /><input 
  className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold mt-10" 
  type="text" 
  placeholder="Last Name" 
 /> 
  <div className="flex flex-col w-full mt-10">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold"
    type="text" 
    placeholder="Address Line 1"
  />
  <span className="text-gray-400 text-sm mt-1 ml-8">We do not ship to P.O. boxes</span>
</div>
<input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold mt-8"
    type="text" 
    placeholder="Address Line 2"
  />
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold mt-10"
    type="text" 
    placeholder="Address Line 3"
  />
  <div className="flex w-full mt-10">
  <div className="flex flex-col w-1/2 pr-3">  
    <input 
      className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold"
      type="text" 
      placeholder="Postal Code"
    />
  </div>
  <div className="flex flex-col w-1/2 pl-3"> 
    <input 
      className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold"
      type="text" 
      placeholder="Locality"
    />
  </div>
</div>
<div className="flex w-full mt-10">
  <div className="flex flex-col w-1/2 pr-3 relative">  
    <input 
      className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 font-semibold w-full pr-10" 
      type="text" 
      placeholder="State/Territory"
    />
    <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" /> 
  </div>
  
  <div className="flex flex-col w-1/2 pl-3 relative"> 
    <input 
      className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold w-full pr-10" 
      type="text" 
      placeholder="India"
    />
    <GoDotFill className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" /> 
  </div>
</div>
<div className="flex mt-10">
  <input type="checkbox"
  className="w-5 h-5 mr-3" />
 <p className="flex font-medium text-md">Save this address to my profile </p>
</div>
<div className="flex mt-10">
<input type="checkbox"
  className="w-5 h-5 mr-3"/>
 <p className="flex font-medium text-md" >Make this my preferred address </p>
</div>

</form>
   </div>
   <div> 
      <h3 className="flex text-2xl font-semibold mt-16">What's your contact information? </h3>
          <form className="flex flex-col w-full mt-11">
            <div className="flex flex-col w-full">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold" 
    type="text" 
    placeholder="Email" />
    <span className="text-gray-400 text-sm mt-1 ml-8">A confirmation email will be sent after checkout.</span>
    </div>
    <div className="flex flex-col w-full mt-8">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold" 
    type="text" 
    placeholder="Phone Number" />
    <span className="text-gray-400 text-sm mt-1 ml-8">A confirmation email will be sent after checkout.</span>
    </div>
    </form>
    </div>
    <h3 className="flex text-2xl font-semibold mt-16">What's your PAN? </h3>
          <form className="flex flex-col w-full mt-11">
            <div className="flex flex-col w-full">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-black font-semibold" 
    type="text" 
    placeholder="PAN" />
    <span className="text-gray-400 text-sm mt-1 ml-8">Enter your PAN to enable payment with UPI, Net Banking or local <br /> card methods</span>
    </div>
    <div className="flex mt-5">
      <input type="checkbox"
      className="w-5 h-5 mr-3" />
      <p className="flex text-sm text-gray-400">Save PAN details to Nike profile</p>
    </div>
  </form>
  <div className="flex mt-20">
      <input type="checkbox"
      className="w-5 h-5 mr-3" />
      <p className="flex text-sm text-gray-400 ml-5">I have read and consent to eShopWorld processing my information in <br /> accordance with the Privacy Statement and Cookie Policy. eShopWorld <br /> is a trusted Nike partner.</p>
    </div>
    <div className="flex justify-center items-center mt-20 w-full h-16 rounded-full border border-[#f5f5f5] bg-slate-50">
      <button className="flex text-gray-500 font-semibold">Continue</button></div>
      <h3 className="flex text-2xl font-semibold mt-10">Delivery</h3>
          <form className="flex flex-col w-full mt-11">
            <div className="flex flex-col w-full">
  <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-gray-500 font-semibold" 
    type="text" 
    placeholder="Shipping" />
    <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-gray-500 font-semibold mt-10" 
    type="text" 
    placeholder="Billing" />
    <input 
    className="border-[#cccccc] border rounded-lg text-black h-16 px-4 py-3 placeholder-gray-500 font-semibold mt-10" 
    type="text" 
    placeholder="Payment" />
    
    
    </div>
</form>
      </div>   
    
         
                    
                    {/* Right Side  */}
 <div className="w-full md:w-1/2 p-5 shadow-md">
    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
    
    <div className="flex mt-5 w-full">
        <p className="text-gray-400 text-left">Subtotal</p>
        <p className="text-gray-400 text-right ml-auto md:ml-52">₹ 20 890.00</p>
    </div>
    
    <div className="flex mt-5 w-full">
        <p className="text-gray-400 text-left">Delivery/Shipping</p>
        <p className="text-gray-400 text-right ml-auto md:ml-48">Free</p>
    </div>
    
    <div className="flex mt-10 w-full">
        <p className="text-black text-left">Total</p>
        <p className="text-black text-right ml-auto md:ml-60">₹ 20 890.00</p>
    </div>
    
    <div className="flex mt-10 w-full">
        <p className="text-sm">(The total reflects the price of your order, including all duties and taxes)</p>
    </div>
    
    <div className="flex flex-col w-full mt-10">
        <h1 className="font-extrabold text-md">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
    </div>
    
    <div>
        <div className="flex mt-8">
            <Image 
                className="w-[208px] h-[208px] hover:scale-95 duration-300" 
                src="/images/Cimg1.jpeg" 
                alt="Nike Running Top" 
                width={208} 
                height={208} 
            />
            <div className="ml-4 sm:ml-8">
                <p className="font-medium text-left">
                    Nike Dri-FIT <br /> 
                    ADV TechKnit <br /> 
                    Ultra Men's <br /> 
                    Short-Sleeve <br /> 
                    Running Top
                </p>
                <span className="font-medium text-gray-400 block mt-4">
                    Qty 1 <br /> 
                    Size <br /> 
                    ₹ 3,895.00
                </span>
            </div>
        </div>
        
        <div className="flex mt-8">
            <Image 
                className="w-[208px] h-[208px] hover:scale-95 duration-300" 
                src="/images/Cimg2.jpeg" 
                alt="Nike Mens Shoe" 
                width={208} 
                height={208} 
            />
            <div className="ml-4 sm:ml-8">
                <p className="font-medium text-left">
                    Nike Air Max <br />  
                    97 SE Men's <br />  
                    Shoes
                </p>
                <span className="font-medium text-gray-400 block mt-4">
                    Qty 1 <br /> 
                    Size UK 8 <br /> 
                    ₹ 16 995.00
                </span>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
         </div> 
    );
};

export default Checkout;


