import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
    // this.reset();
  };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    // const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Contacts</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
