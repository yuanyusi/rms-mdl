import React, {PropTypes} from 'react';
import Header from './common/Header';
import MainSection from './common/MainSection';
// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import theme from '../components/libs/material_ui_raw_theme_file'

class App extends React.Component {
  render() {
    return (
   <div>                
        <Header />
		<MuiThemeProvider>	
        <MainSection />
		</MuiThemeProvider >
        {this.props.children}
		</div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;