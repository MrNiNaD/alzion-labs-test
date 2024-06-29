import { useStateHelper } from "./stateHelper";
import { Link } from "react-router-dom";
import Heart from "./assets/heart.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Home() {
  const [state, setState] = useStateHelper();

  const data = state.data;

  const reorder = (dndData: any) => {
    const sourceIndex = dndData?.source?.index;
    const destIndex = dndData?.destination?.index;

    const clonedData = [...data];

    const source = clonedData[sourceIndex];
    clonedData.splice(sourceIndex, 1);
    clonedData.splice(destIndex, 0, source);

    setState((prevstate: any) => ({ ...prevstate, data: clonedData }));
  };

  return (
    <DragDropContext onDragEnd={reorder}>
      {Array.isArray(data) && (
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="wrapper"
            >
              {data.map((eachData, index) => {
                return (
                  <Draggable
                    key={eachData.id}
                    draggableId={"" + eachData.id}
                    index={index}
                  >
                    {(provided) => (
                      <Link
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={eachData?.id}
                        className="each-plant"
                        to={"/" + eachData?.id}
                        state={eachData}
                      >
                        <span className="list-container">
                          <span className="category">{eachData.category}</span>
                          <span className="plant-name">{eachData.name}</span>

                          <span className="price-container">
                            <span className="price">${eachData.price}</span>
                            <img src={Heart} alt="heart" />
                          </span>
                        </span>
                        <img
                          className="product-img"
                          src={eachData.image}
                          alt={eachData.name}
                        />
                      </Link>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
}

export default Home;
