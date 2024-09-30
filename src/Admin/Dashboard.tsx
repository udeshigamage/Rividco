
import pico1 from "../assets/solar5.jpg";

const Dashboard = () => {
  return (
    <div
      className="flex-1    "
      style={{
        backgroundImage: `url(${pico1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 1.0,
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        {" "}
        <div className="flex flex-col ">
          <h1 className="text-7xl font-serif text-white bg-[#183642] bg-opacity-70 p-2 rounded-lg m-5">
            Welcome to Rividco PVT.LTD{" "}
          </h1>
          <div className="flex flex-row justify-center items-center w-[600px] ml-48">
            <p className="text-[#183642] text-lg font-serif p-2 bg-white bg-opacity-25 rounded-lg p-1 mb-40  ">
              RIVIDCO Projects (Pvt) Ltd, established in 2017, is a Sri
              Lankan-based renewable energy company specializing in solar and
              mini hydro power solutions. With over seven years of experience,
              RIVIDCO has completed more than 300 projects, totaling over 25 MW
              of installations across Sri Lanka and Uganda. Their services
              encompass comprehensive Engineering, Procurement, and Construction
              (EPC) solutions for small to medium-scale rooftop solar projects,
              expert consultancy, and subcontracting for large-scale solar and
              mini hydro installations. As a registered installer with the Sri
              Lanka Sustainable Energy Authority (SLSEA), RIVIDCO is committed
              to delivering high-quality, sustainable energy solutions that
              contribute to a greener future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
