import React, { Component } from 'react';
import styles from './Contact.module.scss';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faSpinner,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const { $ } = window;

class Contact extends Component {
  state = {
    name: '',
    email: '',
    body: '',
    errors: {},
    loading: false
  };

  onSubmit = ev => {
    ev.preventDefault();
    const { name, email, body } = this.state;
    const encodedBody = encodeURI(body);
    const encodedName = encodeURI(name);

    let anchor = document.createElement('a');

    anchor.href = `mailto:${email}?subject=${encodedName}&body=${encodedBody}`;

    anchor.click();
  };

  render() {
    let { errors, loading } = this.state;
    return (
      <div id="Contact" className={styles.Contact}>
        <h1>Contact</h1>
        <h2>Have a question or want to work together?</h2>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-md-6 col-sm-9 ${styles.success}`}>
              <i>
                <Icon icon={faCheckCircle} color="#00e500">
                  You
                </Icon>
                <div>
                  <div id="successFill" />
                </div>
              </i>
              <p>Your message has been successfully sent. Thank you! :)</p>
            </div>
            <div
              className={`col-12 col-md-6 col-sm-9 ${styles.col}`}
              style={{ opacity: loading ? 0.4 : 1 }}
            >
              <form
                id="contactForm"
                onSubmit={this.onSubmit}
                className={styles.Compose}
              >
                <section>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    name="name"
                    valid={Boolean(!errors.name).toString()}
                    onChange={({ target }) =>
                      this.setState({ [target.name]: target.value })
                    }
                  />
                  {errors.name && <span>{errors.name}</span>}
                </section>

                <section>
                  <input
                    required
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    valid={Boolean(!errors.email).toString()}
                    onChange={({ target }) =>
                      this.setState({ [target.name]: target.value })
                    }
                  />
                  {errors.email && <span>{errors.email}</span>}
                </section>

                <section>
                  <textarea
                    required
                    placeholder="Your message"
                    rows="8"
                    name="body"
                    valid={Boolean(!errors.body).toString()}
                    onChange={({ target }) =>
                      this.setState({ [target.name]: target.value })
                    }
                  />
                  {errors.body && <span>{errors.body}</span>}
                </section>

                <button type="submit">
                  {loading ? (
                    <Icon icon={faSpinner} spin />
                  ) : (
                    <span>
                      Send <Icon icon={faPaperPlane} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
