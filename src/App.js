import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const myStyle = theme => ({
  contained: {
    backgroundColor: "green"
  }
});

function IMyButton(props) {
  console.log(props);
  const {classes, children} = props;

  return (
    <Button
      variant="contained"
      classes={{
        contained: classes.contained
      }}>
      {children}
    </Button>
  );
}

const MyButton = withStyles(myStyle)(IMyButton);

class App extends Component {
  render() {
    return (
      <div>
        <MyButton>
          Click me!
        </MyButton>
      </div>
    );
  }
}

export default App;
