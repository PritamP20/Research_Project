import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
  const [selectedOptions, setSelectedOptions] = useState(new Array(20).fill([]));
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const Question = ({ questionNumber, questionText, options }) => (
    <div className="form-group" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <label htmlFor={`question${questionNumber}`}>{questionText}</label>
      {options.map((option, index) => (
        <div className="form-check" key={`q${questionNumber}Option${index + 1}`}>
          <input
            type="radio"
            className="form-check-input"
            id={`q${questionNumber}Option${index + 1}`}
            name={`question${questionNumber}`} // Ensure the same name for all radio buttons in a question
            checked={selectedOptions[questionNumber - 1][0] === `option${index + 1}`}
            onChange={() => handleRadioChange(questionNumber, `option${index + 1}`)}
          />
          <label className="form-check-label" htmlFor={`q${questionNumber}Option${index + 1}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );

  const handleRadioChange = (questionNumber, optionValue) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionNumber - 1] = [optionValue];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate if all questions are answered
    if (selectedOptions.some(options => options.length === 0)) {
      setErrorMessage('Please answer all questions before submitting.');
      return;
    }

    // Create a FormData object and append selected options
    const formData = new FormData();
    selectedOptions.forEach((options, index) => {
      options.forEach((option) => {
        formData.append(`question${index + 1}`, option);
      });
    });

    try {
      // Submit form data to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Clear selectedOptions after successful submission
        setSelectedOptions(Array.from({ length: 20 }, () => []));

        // Navigate to the 'video' component
        navigate('/video');
      } else {
        throw new Error('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };

  const questions = [
    {
      questionNumber: 1, questionText: 'Question 1:  Your intelligence is something very basic about you that',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 2, questionText: 'Question 2: No matter how much intelligence you have, you can always change it quite a bit',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 3, questionText: 'Question 3:  You can always substantially change how intelligent you  are',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 4, questionText: 'Question 4:  You are a certain kind of person, and there is not much  that can be done to really change that',
      options: ['Agree', 'Disagree']
    },

    {
      questionNumber: 5, questionText: 'Question 5:  You can always change basic things about the kind of person you are.'
      ,
      options: ['Agree', 'Disagree']
    },
    { questionNumber: 6, questionText: '. Music talent can be learned by anyone', options: ['Agree', 'Disagree'] },
    {
      questionNumber: 7, questionText: 'Question 7:. Math is much easier to learn if you are male or maybe come from a culture that values math',

      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 8, questionText: 'Question 8:  Only a few people will be truly good at sports – you have to be “born with it.”',
      options: ['Agree', 'Disagree']
    },
    { questionNumber: 9, questionText: 'Question 9: Only a few people will be truly good at sports – you have to be “born with it.”', options: ['Agree', 'Disagree'] },
    {
      questionNumber: 10, questionText: 'Question 10:  The harder you work at something, the better you will be at it',
      options: ['Agree', 'Disagree']
    },
    { questionNumber: 11, questionText: 'Question 11:. Trying new things is stressful for me and I avoid it ', options: ['Agree', 'Disagree'] },
    {
      questionNumber: 12, questionText: 'Question 12: No matter what kind of person you are, you can always change substantially',
      options: ['Agree', 'Disagree']
    },
    { questionNumber: 13, questionText: 'Question 13: ', options: ['Agree', 'Disagree'] },
    {
      questionNumber: 14, questionText: 'Question 14:  I appreciate when parents, coaches, teachers give me  feedback about my performance',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 15, questionText: 'Question 15: . I often get angry when I get feedback about my  performance',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 16, questionText: 'Question 16: All human beings without a brain injury or birth defect are capable of the same amount of learning',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 17, questionText: 'Question 17: . You can learn new things, but you can’t really change how intelligent you are',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 18, questionText: 'Question 18:. You can do things differently, but the important part of who you are can’t really be changed ',
      options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 19, questionText: 'Question 19:  Human beings are basically good, but sometimes make terrible decisions', options: ['Agree', 'Disagree']
    },
    {
      questionNumber: 20, questionText: 'Question 20: . An important reason why I do my schoolwork is that I like  to learn new things',
      options: ['Agree', 'Disagree']
    },

  ];

  return (
    <div className="container mt-5" style={{ backgroundColor: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
      <center style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>
        Answer The Questions
      </center>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Question key={question.questionNumber} {...question} />
        ))}
        <div style={{ margin: '20px auto' }}>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: '#ff4d4d',
              fontWeight: 'bold',
              fontSize: '18px',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
            disabled={errorMessage !== ''}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Survey;