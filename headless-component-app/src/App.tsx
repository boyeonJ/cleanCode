import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootRoutes from "./pages/RootRoutes";
import Nav from "./components/molecules/Header";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    { path: "*", Component: RootRoutes },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Nav/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
