export default function Clock() {
  const now = new Date();

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "red" }}>년: {now.getFullYear()}</h1>
      <h1>
        월/일: {now.getMonth() + 1}/{now.getDate()}
      </h1>
      <h1>
        시간: {now.getHours()}시 {now.getMinutes()}분 {now.getSeconds()}초
      </h1>
    </div>
  );
}
