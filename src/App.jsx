import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [user, setUser] = useState("");
  const [step, setStep] = useState("start");
  const [score, setScore] = useState(0);

  return (
    <>
      {step === "start" && <Start setUser={setUser} setStep={setStep} />}
      {step === "quiz" && (
        <Quiz setStep={setStep} score={score} setScore={setScore} />
      )}
      {step === "result" && (
        <Result user={user} score={score} setStep={setStep} setScore={setScore} />
      )}
    </>
  );
}

export default App;
