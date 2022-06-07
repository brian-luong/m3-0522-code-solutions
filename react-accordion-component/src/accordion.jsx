import React from "react";

class TopicItem extends React.Component {


  render(){
    const topic = this.props.topic;
    return <li className="collapsible-container" >
        <div className="topic" >{topic.topic}</div>
        <div className="content">{topic.content}</div>
      </li>
  }
}

class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listItems = document.querySelectorAll('li');
    console.log(listItems);
    console.log(event.target.parentNode);
  }

  render() {
    const topics = this.props.topics;
    console.log('topics', topics);
    const listItems = topics.map((item) => <TopicItem key={item.topic.toString()} topic={item}  />)
    console.log('listItems', listItems)
    return (
      <ul className="accordian" onClick={this.handleClick}>
        {listItems}
      </ul>
    )
  }
}

export default TopicList;
