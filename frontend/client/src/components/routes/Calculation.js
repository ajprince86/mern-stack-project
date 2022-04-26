const Calculation = ({ bmi }) => {
  function response() {
    if (bmi > 28) {
      return `You should lose about ${
        Math.round(bmi - 28) * 5
      } pounds to be in good shape `;
    } else if (bmi <= 21) {
      return `You should gain about ${Math.round(28 - bmi) * 5} pounds`;
    } else if (bmi > 21 && bmi <= 28) {
      return `Keep up the GREAT work!!`;
    } else return "";
  }

  return (
    <div>
      <p>{response()}</p>
    </div>
  );
};

export default Calculation;
