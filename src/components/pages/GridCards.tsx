import Cards from "../services/Cards";

const GridCards = () => {
    return (
        <div className=" ">
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-5 my-3 p-5">
      <Cards></Cards>
      
      </div>
</div>
    );
};

export default GridCards;