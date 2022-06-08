import React from "react";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null
    }
  }

  handleClick(topicId) {
    const activeId = this.state.activeId;
    if(activeId === topicId) {
      this.setState({ activeId: null })
    } else {
      this.setState({ activeId: topicId })
    }
  }

  render() {
    const topics = this.props.topics;
    const topicList = topics.map((topic)=> {
      return <div key={topic.topicId} className='topic' onClick={() => this.handleClick(topic.topicId)}>
        <div className="topic-title">{topic.title}</div>
        <div className={topic.topicId === this.state.activeId ? 'topic-content active' : 'topic-content'}>{topic.content}</div>
      </div>
    })
    return (
      <div className='accordion-container'>
        {topicList}
      </div>
    )
  }
}

export default Accordion
