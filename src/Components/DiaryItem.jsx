import "./DiaryItem.css";
import { getEmotionImage } from "../Util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  const onDiary = () => {
    nav(`/diary/${id}`);
  };
  const onEdit = () => {
    nav(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div onClick={onDiary} className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={onDiary} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={onEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
