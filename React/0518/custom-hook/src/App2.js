import React, { useEffect, useState } from "react";
import { useScrollChecker } from "./hooks/useScrollChecker";
import ImageList from "./components/ImageList";
import Loading from "./components/Loading";

// 무한 스크롤
export default function App2() {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://picsum.photos/v2/list?page=${fetchPage}&limit=5`;

  const isBottom = useScrollChecker();

  // API 서버에서 데이터를 받아오는 함수
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("네트워크에 문제가 발생했습니다.");
      }

      const data = await res.json();
      setImageList((prevImgs) => [...prevImgs, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchPage]);

  // 스크롤에 바닥에 닿았다면 다음 페이지의 데이터를 추가
  useEffect(() => {
    if (isBottom) {
      setFetchPage((prevPage) => prevPage + 1);
    }
  }, [isBottom]);

  return (
    <>
      {isLoading && <Loading />}
      <ImageList imageList={imageList} />
    </>
  );
}
