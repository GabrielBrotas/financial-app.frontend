import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">Main content goes here</main>
    </div>
  );
};

export default Home;
