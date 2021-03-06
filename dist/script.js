class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
      {
        text:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison" },

      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra" },

      {
        text: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln" },

      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe" },

      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer" },

      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu" },

      {
        text: "Nothing happens unless first we dream.",
        author: "Carl Sandburg" },

      {
        text: "Well begun is half done.",
        author: "Aristotle" },

      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra" },

      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster" },

      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha" },

      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer" },

      {
        text: "We can only learn to love by loving.",
        author: "Iris Murdoch" },

      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark" },

      {
        text: "You'll see it when you believe it.",
        author: "Wayne Dyer" }],


      index: 0 };

    this.getRandomIndex = this.getRandomIndex.bind(this);
  }
  componentDidMount() {
    const ind = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      quotes: this.state.quotes,
      index: ind });

  }

  getRandomIndex() {
    const ind = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      quotes: this.state.quotes,
      index: ind });

  }
  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index].text;
    const author = quotes[index].author;
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text-container" }, /*#__PURE__*/
      React.createElement("p", { id: "text" },
      quote, /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", { id: "author" }, "- ", author))), /*#__PURE__*/


      React.createElement("div", { id: "links" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet" }, "Tweet this Quote"), /*#__PURE__*/


      React.createElement("button", { id: "new-quote", onClick: this.getRandomIndex }, "Another Quote"))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));