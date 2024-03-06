import { useState } from "react";
import "./App.css";

function App() {
  const defaultMax = 25;
  const [count, setCount] = useState(0);
  const [maxCountLimit, setMaxCountLimit] = useState(defaultMax);

  const updateMaxLimit = (event: { target: { value: string; }; }) => {
    const value = parseInt(event.target.value);
    if (!!value && value > 0) {
      setMaxCountLimit(value);
    } else {
      setMaxCountLimit(defaultMax);
    }
  };

  return (
    <div className="background">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              Counter is: {count}
            </p>
          </div>
          <div className="col-12">
            <div className="text-center">
              {count < maxCountLimit && (
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn btn-success mx-2"
                >
                  Increment
                </button>
              )}
              {count > 0 && (
                <div>
                  <button
                    onClick={() => setCount(count - 1)}
                    className="btn btn-primary mx-2"
                  >
                    Decrement
                  </button>

                  <button
                    onClick={() => setCount(0)}
                    className="btn btn-danger mx-2 my-1"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 my-2">
            <div className="text-center">
              <span style={{ fontWeight: "bold", textAlign: "center" }}>
                Min limit is 0 & Max limit is {maxCountLimit} you can change max limit.
              </span>
            </div>

            <div className="text-center">
              <div className="form-group">
                <input
                  type="number"
                  value={maxCountLimit}
                  onChange={updateMaxLimit}
                  placeholder="Please Enter the number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
