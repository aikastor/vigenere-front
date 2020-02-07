import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from "@material-ui/core/IconButton";
import {decodeTxt, encodeTxt} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {
  state = {
    decoded: '',
    encoded: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };
  encodeMessage = async () => {
    if (this.state.password.trim()) {
      await this.props.encodeMsg({txt: this.state.decoded, pass: this.state.password});
      this.setState({encoded: this.props.encoded})
    } else {
      alert('Enter password!');
    }

  };
  decodeMessage = async () => {
    if (this.state.password.trim()) {
      await this.props.decodeMsg({txt: this.state.encoded, pass: this.state.password});
      this.setState({decoded: this.props.decoded})
    } else {
      alert('Enter password!')
    }

  };
  render() {
    return (
        <Container maxWidth="md" className='container' style={{'height': '100%'}}>
          <form onSubmit={(e)=> e.preventDefault()}>
            <div>
              <TextField

                  label="Decoded message"
                  multiline
                  name="decoded"
                  rows="4"
                  value={this.state.decoded}
                  onChange={(e)=>this.handleChange(e)}
                  variant="outlined"
              />
              <br/>
              <TextField  label="password" name="password"
                          required
                          variant="outlined"
                          onChange={(e)=>this.handleChange(e)}
              />
              <br/>
              <IconButton size="medium" onClick={this.encodeMessage}>
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="medium"  onClick={this.decodeMessage}>
                <ArrowUpwardIcon fontSize="inherit"/>
              </IconButton>
              <TextField
                  id="outlined-multiline-flexible"
                  label="Encoded message"
                  multiline
                  name="encoded"
                  rows="4"
                  value={this.state.encoded}
                  onChange={(e)=>this.handleChange(e)}
                  variant="outlined"
              />
            </div>
          </form>
        </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  encodeMsg: txt => dispatch(encodeTxt(txt)),
  decodeMsg: txt => dispatch(decodeTxt(txt))
});
const mapStateToProps = state => ({
  encoded: state.encoded,
  decoded: state.decoded,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);