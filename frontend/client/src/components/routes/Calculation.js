const Calculation = ({ bmi }) => {
  function response() {
    if (bmi > 28) {
      return `Based on our calculations you should lose about ${
        Math.round(bmi - 28) * 5
      } pounds to be in good shape `;
    } else if (bmi <= 21) {
      return `Based on our calculations you should gain about ${
        Math.round(28 - bmi) * 5
      } pounds`;
    } else return "";
  }

  return (
    <div>
      <p>{response()}</p>
    </div>
  );
};

export default Calculation;
