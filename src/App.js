import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Feed from "./Components/Feed";
import LeftNav from "./Components/LeftNav";
import SearchResults from "./Components/SearchResults";
import VideoDetails from "./Components/VideoDetails";
import { AppContext } from "./Context/contextApi";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <>
          <Header/>
          <Feed/>
        </>
      ),
    },
  {
    path:"searchResults/:searchQuery",
    element:<>
    <Header/>
    <SearchResults/>
    </>
  },
  {
    path:"video/:id",
    element:<VideoDetails/>
  }
  ])
  return (
    <>
      <AppContext>
        <RouterProvider router={router}/>        
      </AppContext>
    </>
  );
};

export default App;
