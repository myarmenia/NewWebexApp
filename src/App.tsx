import { RouterProvider } from "react-router-dom";
import { RootSpinner } from "./components/rootSpinner/RootSpinner";
import { router } from "./routes";
 
function App() {
  return <RouterProvider router={router} fallbackElement={<RootSpinner />} />;
}

export default App;

// <Teacher />
// <Header />
//  <Container>
//     <SearchArea />
//     <InfoCont />
//     <Features />
//   </Container>
//   <News />
//   <Container>
//     <Opinion />
//     <Lessons />
//     <Questions />
//   </Container>
//   <Footer />
//  <Tariffs />

//   <Regsitration />
//   <Entry />
