import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
