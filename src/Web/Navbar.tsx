
import pic01 from "../assets/Screenshot 2025-02-09 220935.png";

const Navbar = () => {
  return (
    <div className=" flex flex-row bg-white font-serif font-extrabold min-w-full justify-between h-16 top-0 left-0 text-[#183642] text-2xl">
      <img src={pic01} alt="logo" />
      <div className=" pt-3 text-blue-900 pr-2">RIVIDCO PVT.LTD</div>
    </div>
  );
};

export default Navbar;
