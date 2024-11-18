
import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [category, setCategory] = useState("All"); // Default category

  useEffect(() => {
    fetch("/item.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data); // Show all products initially
      });
  }, []);

  const filterByCategory = (category) => {
    setCategory(category);
    if (category === "All") {
      setFilteredGadgets(gadgets);
    } else {
      const filtered = gadgets.filter((gadget) => gadget.category === category);
      setFilteredGadgets(filtered);
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="grid grid-cols-1 gap-4 absolute left-20">
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("All")}
        >
          All products
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("laptop")}
        >
          Laptop
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("smartphone")}
        >
          Phones
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("Accessories")}
        >
          Accessories
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("Smart Watch")}
        >
          Smart Watch
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("macbook")}
        >
          MacBook
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => filterByCategory("iphone")}
        >
          iPhone
        </button>
      </div>

      {/* Filtered Gadgets */}
      <div className="grid grid-cols-3 gap-14 mt-10 ">
        {filteredGadgets.length > 0 ? (
          filteredGadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))
        ) : (
          <div className="col-span-3 text-center text-2xl font-bold text-red-500">
            <h1 className="text-red-700 text-7xl mt-10"> Item is Not Available</h1>
            <p className="text-green-600 font-bold mt-10">If you want you will try another types of item</p>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Gadgets;

// import { useEffect, useState } from "react";
// import Gadget from "../Gadget/Gadget";

// const Gadgets = () => {
//   const [gadgets, setGadgets] = useState([]);
//   const [filteredGadgets, setFilteredGadgets] = useState([]);
//   const [category, setCategory] = useState("All"); // Default category

//   useEffect(() => {
//     fetch("/item.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setGadgets(data);
//         setFilteredGadgets(data); // Show all products initially
//       });
//   }, []);

//   const filterByCategory = (category) => {
//     setCategory(category);
//     if (category === "All") {
//       setFilteredGadgets(gadgets);
//     } else {
//       const filtered = gadgets.filter((gadget) => gadget.category === category);
//       setFilteredGadgets(filtered);
//     }
//   };

//   return (
//     <div>
//       {/* Filter Buttons */}
//       <div className="flex flex-col gap-4 absolute left-20 top-20">
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("All")}
//         >
//           All products
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("laptop")}
//         >
//           Laptop
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("smartphone")}
//         >
//           Phones
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("Accessories")}
//         >
//           Accessories
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("Smart Watch")}
//         >
//           Smart Watch
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("macbook")}
//         >
//           MacBook
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("iphone")}
//         >
//           iPhone
//         </button>
//       </div>

//       {/* Filtered Gadgets */}
//       <div className="grid grid-cols-3 gap-10 mt-20 ml-40">
//         {filteredGadgets.length > 0 ? (
//           filteredGadgets.map((gadget) => (
//             <Gadget key={gadget.product_id} gadget={gadget} />
//           ))
//         ) : (
//           <div className="col-span-3 text-center text-2xl font-bold text-red-500">
//             Item is Not Available
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gadgets;

// import { useEffect, useState } from "react";
// import Gadget from "../Gadget/Gadget";

// const Gadgets = () => {
//   const [gadgets, setGadgets] = useState([]);
//   const [filteredGadgets, setFilteredGadgets] = useState([]);
//   const [category, setCategory] = useState("All"); // Default category

//   useEffect(() => {
//     fetch("/item.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setGadgets(data);
//         setFilteredGadgets(data); // Show all products initially
//       });
//   }, []);

//   const filterByCategory = (category) => {
//     setCategory(category);
//     if (category === "All") {
//       setFilteredGadgets(gadgets);
//     } else {
//       const filtered = gadgets.filter((gadget) => gadget.category === category);
//       setFilteredGadgets(filtered);
//     }
//   };

//   return (
//     <div className="flex flex-col items-start">
//       {/* Filter Buttons */}
//       <div className="flex gap-4 p-4 bg-gray-100 rounded shadow-lg">
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("All")}
//         >
//           All products
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("laptop")}
//         >
//           Laptop
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("smartphone")}
//         >
//           Phones
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("Accessories")}
//         >
//           Accessories
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("Smart Watch")}
//         >
//           Smart Watch
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("macbook")}
//         >
//           MacBook
//         </button>
//         <button
//           className="btn btn-active btn-accent"
//           onClick={() => filterByCategory("iphone")}
//         >
//           iPhone
//         </button>
//       </div>

//       {/* Filtered Gadgets */}
//       <div className="grid grid-cols-3 gap-10 mt-10">
//         {filteredGadgets.length > 0 ? (
//           filteredGadgets.map((gadget) => (
//             <Gadget key={gadget.product_id} gadget={gadget} />
//           ))
//         ) : (
//           <div className="col-span-3 text-center text-2xl font-bold text-red-500">
//             Item is Not Available
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gadgets;



