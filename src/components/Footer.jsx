import React from 'react';

import '../styles/footer.scss';
import { TEXT } from '../locals';

const { FOOTER_TEXT } = TEXT;

export default () => (
  <section className="footer">
    <button className="join-for-free" type="button">
      <h6>{FOOTER_TEXT[0]}</h6>
    </button>
    <div className="content">
      <div className="quote">
        <h3>{FOOTER_TEXT[1]}</h3>
        <h4>
          {FOOTER_TEXT[2]}
          {' '}
          <br />
          {FOOTER_TEXT[3]}
        </h4>
      </div>
    </div>
  </section>
);
