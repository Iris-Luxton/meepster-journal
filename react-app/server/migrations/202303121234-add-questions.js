import mongoose from 'mongoose';
import connect from '../database/connect';
import Question from '../models/questionSchema';
import questionsData from '../database/data';

const addQuestions = async () => {
    try {
        connect();

        await Question.create(questionsData);
    } catch(e) {
        console.log(e)
    }
}

addQuestions()


