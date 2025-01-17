import Header from "../Components/Header";
import Button from "../Components/Button";
import DiaryList from "../Components/DiaryList";
const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 1월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
