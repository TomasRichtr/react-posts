import {MdMessage, MdPostAdd} from 'react-icons/md';
import {Link} from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header
      className={classes.header}
    >
      <h1
        className={classes.logo}
      >
        <MdMessage />
        <span
          className={classes.headerText}
        >
          React Poster
        </span>
      </h1>
      <p>
        <Link
          className={classes.button}
          to="/new-post"
        >
          <MdPostAdd
            size={18}
          />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
