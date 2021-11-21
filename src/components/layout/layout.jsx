import PropTypes from 'prop-types';
import Header from './header';

const Layout = ({ children, id, title = 'Landbot' }) => {
  return (
    <section id="landbot-app" className="hero is-fullheight is-dark">
      <div className="hero-body">
        <div className={`${id}-container`}>
          <div className={`landbot-${id}`}>
            {!!title && <Header title={title} />}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Layout;
