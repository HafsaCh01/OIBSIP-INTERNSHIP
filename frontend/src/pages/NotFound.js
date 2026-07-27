import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-screen">
      <div className="notfound-card">
        <span className="eyebrow">404</span>
        <h1>This slice is missing.</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/dashboard" className="btn btn-primary">
          Back to menu
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
