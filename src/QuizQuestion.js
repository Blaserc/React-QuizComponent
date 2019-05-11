import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }

  handleClick(buttonText) {
    this.props.quiz_question.answer === buttonText ? this.setState({ incorrectAnwser: false }) : this.setState({ incorrectAnwser: true });
    return this.props.quiz_question.answer === buttonText ? this.props.showNextQuestionHandler() : null;
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) =>
              <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option} />
            )}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
      </main>
    );
  }
}

export default QuizQuestion;