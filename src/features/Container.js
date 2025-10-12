import styled from 'styled-components';
import PropTypes from 'prop-types';

 function Container({ className, children }) {
  return (
    <div className={className}> 
      <main>{children}</main>
    </div>
  );
}

 Container.propTypes = {
  className: PropTypes.string,
};

export default styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;