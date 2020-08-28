import Header from "./header";
const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      a {
        color: #1b789e;
        text-decoration: none;
      }
      a:hover {
        color: #166281;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </div>
);
export default MainLayout;
