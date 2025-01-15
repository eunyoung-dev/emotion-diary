import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Diary {id}</div>;
};

export default Diary;
