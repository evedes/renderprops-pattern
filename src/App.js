import React, { Fragment } from 'react';

// const Temperature = ({ children }) => children(20);

class Temperature extends React.Component {
  render() {
    return (
      <Fragment>
      { this.props.children(20) }
      </Fragment>
    );
  }
}

const saySomethingAboutTheWeather = (temp) => {
  return temp >= 30 ? 'My brain is melting!' : 'My brain is not melting';
}

const ShowTemperatureInCelsius = ({temp, color}) => {
  return (
    <div>
      <h2 style={{ color: `${color}` }}>Temp is {temp} ºC</h2>
      { saySomethingAboutTheWeather(temp) }
    </div>
  );
}

const ShowTemperatureInFahrenheit = ({temp}) => {
  const tempInF = temp * (9/5) +32;
  return (
    <div>
      <h2>Temp is {tempInF} ºF</h2>
      { saySomethingAboutTheWeather(tempInF) }
    </div>
  )
}

const App = ({color}) => {
    return (
      <div className="text-center my-3">
        <Temperature>
          { (temp) => (
            <Fragment>
              <ShowTemperatureInCelsius temp={temp} color={color} />
              <ShowTemperatureInFahrenheit temp={temp} />
            </Fragment>
            )
          }
        </Temperature>
      </div>
    );
}

const withColor = WrappedComponent => {
  return class extends React.Component {
    render() {
      return <WrappedComponent color={'red'} />;
    }
  }
}


export default withColor(App);
