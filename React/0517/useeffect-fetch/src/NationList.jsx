import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }

  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default function NationList() {
  const URL = "http://localhost:3000/nations";

  const [data, setData] = useState([]);
  const [url, setUrl] = useState(URL);

  const getData = () => {
    fetch(URL)
      .then((res) => {
        // http 상태 코드가 200번대가 아닐 경우
        if (!res.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return res.json();
      })
      // setData 함수로 data 상태를 변경하고 있기 때문에 컴포넌트가 리렌더링된다.
      // 따라서 특정 조건이 없다면 무한 렌더링이 될 것
      .then((data) => setData(data))
      .catch((error) => {
        console.error("데이터를 가져오는데 문제가 발생했습니다 : ", error);
      });
  };

  const getDataAsync = async () => {
    try {
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error("네트워크 응답에 문제가 있습니다.");
      }

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 발생했습니다 : ", error);
    }
  };

  // useEffect를 사용하여 최초 한 번만 실행되도록 한다.
  useEffect(() => {
    // getData();
    getDataAsync();
  }, [url]);

  return (
    <>
      <Item>
        <h2>나라 목록</h2>
        <ul>
          {data.map((nation) => {
            return (
              <li key={nation.id}>
                <h3>나라 이름 : {nation.title}</h3>
                <p>인구 수 : {nation.population}</p>
              </li>
            );
          })}
        </ul>
      </Item>
      <div>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations?loc=europe");
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
      </div>
    </>
  );
}
