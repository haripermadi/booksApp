import {
	GET_BOOK_LIST,
	ADD_NEW_BOOK,
	REMOVE_BOOK,
	UPDATE_BOOK
} from './book.actionTypes'

const initialState = {
	bookList :[],
}

const reducers = (state = {...initialState}, action) => {
	switch(action.type){
		case GET_BOOK_LIST:
			return ({
				...state,
				bookList:action.payload,
			})
			case REMOVE_BOOK:
				let newBooks = state.bookList.filter(item => item.id !== action.payload.id)
				console.log('reducer--removebook--re-', newBooks)
			return ({
				...state,
				bookList:newBooks,
			})
			case ADD_NEW_BOOK:
				let newBook = {
					id:state.bookList.length + 1,
					title: action.payload.title,
					author: action.payload.author,
					date_published: action.payload.datePublished,
					number_of_pages: action.payload.numberOfPage,
					type_of_book:action.payload.typeOfBook,
					image_url:action.payload.imageUrl,
					synopsis:action.payload.synopsis
				}
				console.log('reducer--addbook--re-', newBook)
				return ({
					...state,
					bookList:state.bookList.push(newBook)
				})
		default:
			return state
	}
}


export default reducers