import {
	GET_BOOK_LIST,
	ADD_NEW_BOOK,
	REMOVE_BOOK,
	UPDATE_BOOK
} from './book.actionTypes'

import dataRaw from '../data'

export const getBook = () => (
  {
		type: GET_BOOK_LIST,
		payload :dataRaw
	}
)

export const removeBook = (input) => (
  {
		type: REMOVE_BOOK,
		payload :input
	}
)

export const addNewBook = (input) => (
  {
		type: ADD_NEW_BOOK,
		payload :input,
		status:'success'
	}
)

export const updateBook = (input,index) => (
  {
		type: UPDATE_BOOK,
		payload :input,
		index:index,
		status:'updated'
	}
)