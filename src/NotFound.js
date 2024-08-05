import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="notFound">
            <h1>Page Not Found</h1>
            <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <p>Please try your search again or visit our home page.</p>
            <br /><Link to="/">Go back to Homepage</Link>
        </div>
    );
}

export default NotFound;