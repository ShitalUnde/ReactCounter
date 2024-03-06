import { useState } from "react";
import "./App.css";

function App() {
  const defaultMax = 25;
  const [count, setCount] = useState(0);
  const [maxCountLimit, setMaxCountLimit] = useState(defaultMax);
  const [maxCount, setmaxCount] = useState(defaultMax);

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
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="col-12 my-2">
            <div className="text-center">
              <span style={{ fontWeight: "bold", textAlign: "center" }}>
                Min limit is 0 & Max limit is {maxCountLimit} you can change max
                limit.
              </span>
            </div>

            <div className="text-center">
              <div className="form-group">
                <input
                  type="number"
                  value={maxCount}
                  onChange={(e) => setmaxCount(parseInt(e.target.value))}
                  placeholder="Please Enter the number"
                />
              </div>
              {maxCount > 0 && (
                <button
                  onClick={() => setMaxCountLimit(maxCount)}
                  className="btn btn-info mx-2 my-2"
                >
                 Click here to update Max Counter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
