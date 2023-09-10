import React, { useState, useEffect } from "react";
import CenterTitle from "../../components/title/CenterTitle";
import NoData from "../../components/NoData";
import ListItem from "./ListItem";

interface NotificationData {
  title: string;
  name: string,
  content: string;
  date: string;
}

const NotificationList: React.FC = () => {
  const [data, setData] = useState<NotificationData[]>([]);
  const message = "현재 받은 알림이 없습니다.";
  const linkText = "홈으로 가기";
  const linkTo = "/home";

  const testData: NotificationData[] = [
    {
      title: "혜택",
      name: "",
      content: "앱 설치 후 회원가입 시 모든 브랜드 10% 할인쿠폰 증정",
      date: "2023.09.01 00:00",
    },
    {
      title: "답변",
      name: "ALFDN",
      content: "카멜프든 상품에 남겨주신 문의글에 답변이 달렸습니다.",
      date: "2023.08.25 00:00",
    },
    {
      title: "재입고알림",
      name: "",
      content: "[22 Series] OR-214 원레인 컬러드 체어가 재입고 되었습니다.",
      date: "2023.09.01 21:40",
    },
  ];

  useEffect(() => {
    // 초기 데이터를 기존 데이터에 추가
    setData([...data, ...testData]);
  }, []); 

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
