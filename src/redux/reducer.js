import { ADD_POST, ADD_TEXT, ADD_IMAGE, CHOOSE_AUTHOR  } from "../redux/actions"

const POSTS = [
  {
    text: 'wazup',
    image: 'img1',
    author: 'jim'
  },
  {
    text: 'hello',
    image: 'img',
    author: 'tod'
  }
]

const initialState = {
    posts: POSTS
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const posts = [...state.posts, action.payload]
    return {
      ...state,
      posts
    }
    case ADD_TEXT:
      return [{
        text: action.payload
      },
      ...state
    ];
    case ADD_IMAGE:
			return [{
        image: action.payload
      },
      ...state 
    ];
    case CHOOSE_AUTHOR:
      return [{
        author: action.payload,
      },
    ...state
  ];
  // case ADD_NICKNAME:
  //   return [{
  //     nickname: action.payload
  //   },
  //   ...state
  // ];
  // case ADD_PHOTO:
  //   return [{
  //     photo: action.payload
  //   },
  //   ...state
  // ];
    default:
      return state
  }
}

// function reducer(state = [], action) {
// 	switch (action.type) {
// 		case 'ADD_POST':
// 			return [{
// 					name: action.name,
// 					text: action.text,
//           image: action.image
// 				},
// 				...state
// 			];

export default reducer
