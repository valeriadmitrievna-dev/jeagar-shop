import { useRoutes } from "./routes";
import SideBar from './components/SideBar/index';
import { MainLayout } from './index.styled';

function App() {
  const isAuth = true;
  const routes = useRoutes(isAuth);
  return (
    <MainLayout>
      <SideBar />
      {routes}
    </MainLayout>
  );
}

export default App;
