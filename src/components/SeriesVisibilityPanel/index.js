import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import styles from './SeriesVisibilityPanel.module.css';


class SeriesVisibilityPanel extends Component {
  render() {
    const {
      seriesVisibility,
      toggleSeriesVisibility
    } = this.props;

    if (!seriesVisibility) {
      return null;
    }

    return (
      <div className={styles.root}>
        <h3>
          Series visibility:
        </h3>
        <div className={styles.formRow}>
          {
            seriesVisibility.map((visibility) => {
              return (
                <Form.Check
                  custom
                  onChange={toggleSeriesVisibility}
                  type="checkbox"
                  checked={visibility.isVisible}
                  id={visibility.id}
                  label={visibility.name}
                  className={styles.checkbox}
                  key={visibility.id}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SeriesVisibilityPanel;