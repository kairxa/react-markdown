import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Parser } from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';

const parser = new Parser();

const ReactNativeMarkdown = (props) => {
  const containerProps = props.containerProps || {};
  const renderer = new ReactRenderer(props);
  const ast = parser.parse(props.source || '');

  if (props.walker) {
    const walker = ast.walker();
    let event = walker.next();

    while (event) {
      props.walker.call(this, event, walker);
      event = walker.next();
    }
  }

  if (props.style) {
    containerProps.style = props.style;
  }

  const reactArgs = [props.containerComponent, containerProps, props.childBefore]
            .concat(renderer.render(ast).concat(
                [props.childAfter]
            ));

  return React.createElement(...reactArgs);
};

ReactNativeMarkdown.propTypes = {
  style: View.propTypes.style,
  containerProps: PropTypes.object,
  source: PropTypes.string.isRequired,
  containerComponent: PropTypes.func,
  childBefore: PropTypes.object,
  childAfter: PropTypes.object,
  sourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  softBreak: PropTypes.string,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.array,
  disallowedTypes: PropTypes.array,
  transformLinkUri: PropTypes.func,
  transformImageUri: PropTypes.func,
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  walker: PropTypes.func,
};

ReactNativeMarkdown.defaultProps = {
  containerComponent: View,
};

ReactNativeMarkdown.types = ReactRenderer.types;
ReactNativeMarkdown.renderers = ReactRenderer.renderers;
ReactNativeMarkdown.uriTransformer = ReactRenderer.uriTransformer;
