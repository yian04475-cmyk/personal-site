import ContactIcons from '@/components/Contact/ContactIcons';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-info">
          <h3>AnYi</h3>
        </div>

        <div className="footer-right">
          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              社交
            </h4>
            <ContactIcons />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} · 个人网站设计与搭建
        </p>
      </div>
    </footer>
  );
}