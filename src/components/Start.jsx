function Start({ setUser, setStep }) {
  return (
    <div className="card">
      <h2>Quiz App</h2>
      <hr />
      <label>Enter Your Full Name</label>
      <input
        type="text"
        placeholder="User"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => setStep("quiz")}>Start Quiz</button>
    </div>
  );
}

export default Start;
