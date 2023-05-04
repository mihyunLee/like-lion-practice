import "./List.css";

export default function List() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <div>
      <ul className="localList">
        {list.map((item) => (
          <li
            key={item.no}
            className={["localItem", item.visited ? "visited" : null].join(" ")}
          >
            {item.area}
          </li>
        ))}
      </ul>
    </div>
  );
}
