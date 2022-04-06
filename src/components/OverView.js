import React from 'react';
import { useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';
import { Summary } from './Summary';

export const OverView = () => {

   const quizEnd = useSelector((state) => state.quiz.quizOver) 

   return (
       <>
       {!quizEnd ? <CurrentQuestion /> : <Summary />}
       </>
   )
}