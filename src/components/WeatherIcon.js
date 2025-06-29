function WeatherIcon({ iconNumber, summary }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/weather_icons/set03/big/${iconNumber}.png`}
      alt={summary}
      draggable={false}
    />
  );
}

export default WeatherIcon;
