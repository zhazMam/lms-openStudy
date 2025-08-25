import Layout from "./components/Layout";
import MainRoutes from "./components/MainRoutes";
import "./global/reset.css";
function App() {
  return (
    <div>
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
}

export default App;
