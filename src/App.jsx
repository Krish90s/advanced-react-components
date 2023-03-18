import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App p-2">
      <section>
        <h1>Advanced React Ui Concepts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          architecto similique incidunt numquam placeat asperiores odit in iste,
          dicta excepturi. Voluptas fugiat tempore tenetur velit libero earum
          quaerat consectetur voluptatem.
        </p>
        <Link to="/components" className="btn btn-primary">
          Click Here
        </Link>
      </section>
    </div>
  );
}

export default App;
