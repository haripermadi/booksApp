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
				image_url:action.payload.imageUrl
			}
			return ({
				...state,
				bookList:state.bookList.push(newBook)
			})
		case UPDATE_BOOK:
			let arrayBooks = [...state.bookList]
			arrayBooks[action.index].id = action.payload.id
			arrayBooks[action.index].title = action.payload.title
			arrayBooks[action.index].author = action.payload.author
			arrayBooks[action.index].date_published = action.payload.datePublished
			arrayBooks[action.index].number_of_pages = action.payload.numberOfPage
			arrayBooks[action.index].type_of_book = action.payload.typeOfBook
			arrayBooks[action.index].image_url = action.payload.imageUrl

			console.log('reducer--updatebook--re-', action.payload,'---arrbook---', arrayBooks)
			return ({
				...state,
				bookList: arrayBooks,
			})
		default:
			return state
	}
}


export default reducers