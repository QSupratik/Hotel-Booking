import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">© 2025 Airbnb, Inc.</li>
              <li className="list-inline-item">·</li>
              <li className="list-inline-item"><a href="/privacy">Privacy</a></li>
              <li className="list-inline-item">·</li>
              <li className="list-inline-item"><a href="/terms">Terms</a></li>
              <li className="list-inline-item">·</li>
              <li className="list-inline-item"><a href="/sitemap">Sitemap</a></li>
              <li className="list-inline-item">·</li>
              <li className="list-inline-item"><a href="/company-details">Company details</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <select className="form-select form-select-sm" aria-label="Language">
                  <option value="en">English (IN)</option>
                  <option value="hi">Hindi</option>
                  {/* Add more language options as needed */}
                </select>
              </li>
              <li className="list-inline-item">
                <select className="form-select form-select-sm" aria-label="Currency">
                  <option value="inr">₹ INR</option>
                  <option value="usd">$ USD</option>
                  {/* Add more currency options as needed */}
                </select>
              </li>
              <li className="list-inline-item">
                <a href="/help"><i className="fas fa-question-circle"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/globe"><i className="fas fa-globe"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="/user"><i className="fas fa-user"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
