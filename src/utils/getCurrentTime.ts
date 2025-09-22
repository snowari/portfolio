const getCurrentTime = () => {
  const now = new Date();
  return now
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/^0/, ""); // 앞자리 0 제거
};
export default getCurrentTime;
