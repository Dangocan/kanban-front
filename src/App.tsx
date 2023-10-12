import { MainWrapper, RedirectWrapper, SecondaryWrapper } from "./components";
import { BoardsPage, LoginPage, SignUpPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectWrapper>
        <LoginPage />
      </RedirectWrapper>
    ),
    loader: () => localStorage.getItem("jwtToken"),
    ErrorBoundary: () => <RedirectWrapper />,
    children: [
      {
        path: "/boards",
        loader: () => localStorage.getItem("jwtToken"),
        element: <RedirectWrapper />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
]);

function App() {
  return (
    <MainWrapper>
      <RouterProvider router={router} />
    </MainWrapper>
  );
}

export default App;
