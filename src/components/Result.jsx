function Result({ user, score, setStep, setScore }) {

  function saveHistory() {
    localStorage.setItem("history", JSON.stringify({ user, score }));
    alert("History Saved!");
  }

  return (
    <div className="card">
      <h2>Quiz App</h2>
      <hr />
      <p>{user}, You Scored {score} out of 5</p>

      <button
        onClick={() => {
          setScore(0);      // ✅ RESET SCORE
          setStep("start");
        }}
      >
        Reset
      </button>

      <button onClick={saveHistory}>Save History</button>
    </div>
  );
}

export default Result;
