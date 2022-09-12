import { Link, useNavigate } from "react-router-dom";
// import "./directory-item.styles.scss";

import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      {/* <Link className="body" to={`shop/${title}`}> */}
      <Body>
        <div>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </Body>
      {/* </Link> */}
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
