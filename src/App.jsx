import { ClientRoute } from "./Routes/ClientRoute";
import { createRouterProvider } from "./Util/RouterProvider";

function App() {
  const router=createRouterProvider(ClientRoute);
  return (
    <>
      {router}
    </>
  )
}

export default App
