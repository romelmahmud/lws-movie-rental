export default function Rating({ value }) {
  const numberOfStars = Array(value).fill("");
  return (
    <>
      {numberOfStars.map((star, index) => (
        <img
          key={index}
          src="./assets/star.svg"
          width="14"
          height="14"
          alt=""
        />
      ))}
    </>
  );
}
