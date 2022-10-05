import React from "react";
import Timer from "./containers//Timer";

function App() {
    return (
        <div>
            <h1 className="text-5xl md:text-4xl text-center font-thin pt-8 px-6">Stopwatch Timer</h1>
            <Timer />
        </div>
    );
}

export default App;