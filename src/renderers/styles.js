import { StyleSheet } from 'react-native';

const allTextStyle = {
  color: '#212121',
  fontFamily: 'Roboto',
  fontSize: 14,
};

const blockQuoteStyle = {
  borderLeftWidth: 5,
};

const codeStyle = {
  color: '#212121',
  fontFamily: 'monospace',
};

const codeBlockStyle = {
  padding: 10,

  backgroundColor: '#F7F7F7',
};

const emphStyle = Object.assign({}, allTextStyle, {
  fontStyle: 'italic',
});

const headingOneStyle = Object.assign({}, allTextStyle, {
  fontSize: 24,
  fontWeight: 700,
});

const headingTwoStyle = Object.assign({}, allTextStyle, {
  fontSize: 22,
  fontWeight: 700,
});

const headingThreeStyle = Object.assign({}, allTextStyle, {
  fontSize: 18,
  fontWeight: 700,
});

const headingFourStyle = Object.assign({}, allTextStyle, {
  fontSize: 16,
  fontWeight: 700,
});

const headingFiveStyle = Object.assign({}, allTextStyle, {
  fontSize: 12,
  fontWeight: 700,
});

const headingSixStyle = Object.assign({}, allTextStyle, {
  fontSize: 10,
  fontWeight: 700,
});

const itemStyle = Object.assign({}, allTextStyle);

const linkStyle = Object.assign({}, allTextStyle, {
  color: '#1E88E5',
});

const paragraphStyle = Object.assign({}, allTextStyle);

const strongStyle = Object.assign({}, allTextStyle, {
  fontWeight: 700,
});

const textStyle = Object.assign({}, allTextStyle);

const thematicBreak = {
  alignSelf: 'stretch',
  height: 5,

  backgroundColor: '#F7F7F7',
};

export default StyleSheet.create({
  blockQuoteStyle,
  codeStyle,
  codeBlockStyle,
  emphStyle,
  headingOneStyle,
  headingTwoStyle,
  headingThreeStyle,
  headingFourStyle,
  headingFiveStyle,
  headingSixStyle,
  itemStyle,
  linkStyle,
  paragraphStyle,
  strongStyle,
  textStyle,
  thematicBreak,
});
