import Cards from "../services/Cards";

const GridCards = () => {
    return (
        <div className="items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-3 my-3 ">
      <Cards></Cards>
      <Cards></Cards>
      
      
      </div>
</div>
    );
};

export default GridCards;