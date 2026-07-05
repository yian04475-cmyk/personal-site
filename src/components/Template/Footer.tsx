import ContactIcons from '@/components/Contact/ContactIcons';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <h3>AnYi</h3>
        <ContactIcons />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} · 个人网站设计与搭建
        </p>
      </div>
    </footer>
  );
}
