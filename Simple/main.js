var Component = React.createClass({
  render: function() {
    return <h2>Hey! {this.props.subject} is very useful instrument in right hands. It&#39;s {this.props.word}</h2>;
  }
});

ReactDOM.render(
   <Component word="easy" subject="React" />,
   document.getElementById("content")
  );
