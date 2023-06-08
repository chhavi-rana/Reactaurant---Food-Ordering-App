const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Your Company";

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
