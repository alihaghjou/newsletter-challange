import { useState } from "react";
import Subscripe from "./Subscripe";
import Thanks from "./Thanks";
function App() {
  const [isSubscriped, setIsSubscriped] = useState(true);
  const [email, setEmail] = useState("")
  return (
    <div>
      {isSubscriped ? (
        <Subscripe email={email} setEmail={setEmail} setIsSubscriped={setIsSubscriped} />
      ) : (
        <div>
          <Thanks email={email} />
        </div>
      )}
    </div>
  );
}

export default App;
