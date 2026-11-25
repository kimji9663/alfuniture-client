import React, { useState } from "react";
import CenterTitle from "../../components/title/CenterTitle";
import NoData from "../../components/NoData";
import ListItem from "./ListItem";
import { notificationData } from "../../data";

interface NotificationData {
  title: string;
  name: string,
  content: string;
  date: string;
}

const NotificationList: React.FC = () => {
  const [data] = useState<NotificationData[]>(notificationData);
  const message = "현재 받은 알림이 없습니다.";
  const linkText = "홈으로 가기";
  const linkTo = "/home";


  return (
    <>
      <CenterTitle title={["알림"]} />
      {data.length > 0 ? (
        // 데이터가 있을 때 렌더링
        data.map((item, index) => (
          <ListItem key={index} item={item} isLastItem={index === data.length - 1}/>
        ))
      ) : (
        // 데이터가 없을 때 렌더링
        <NoData message={message} linkText={linkText} linkTo={linkTo} />
      )}
    </>
  );
};

export default NotificationList;
