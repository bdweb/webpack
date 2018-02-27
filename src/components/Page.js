// In src/Page.js

import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';

// Declare your component
export default class Page extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
        // We are using the function to get a document by its uid
        //   return props.prismicCtx.api.getByID('qqqq').then(function(doc) {
            //     this.setState({ doc });
            //     });
            return   props.prismicCtx.api.query(
                props.prismicCtx.predicates.at('document.type', 'pag')
            ).then(function(response) {
                debugger;
    var document = response.results[0];
    // document contains the document content
});
   
   
   props.prismicCtx.api.getByUID('Page', 'qqqq', (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
        debugger;
      return (
        <div data-wio-id={this.state.doc.id}>
          {/* This is how to get an image into your template */}
          <img alt="cover" src={this.state.doc.data.your_image_field_id.url} />
          {/* This is how to insert a Rich Text field as plain text */}
          <h1>{PrismicReact.RichText.asText(this.state.doc.data.your_text_field_id)}</h1>
          {/* This is how to insert a Rich Text field into your template as html */}
          {PrismicReact.RichText.render(this.state.doc.data.your_description_field_id, this.props.prismicCtx.linkResolver)}
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <h1>Loading</h1>;
  }
}