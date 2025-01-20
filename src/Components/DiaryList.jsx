import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const onNewDiary = () => {
    nav("/new");
  };
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "latest") {
        return b.createdDate - a.createdDate;
      } else {
        return a.createdDate - b.createdDate;
      }
    });
  };

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select
          className="filter_select"
          value={sortType}
          onChange={onChangeSortType}
        >
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={onNewDiary} />
      </div>
      <div className="List_wrapper">
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
