const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			favourites: [],

			idElement:{}
		},
		actions: {
			getIdElement:(item)=>{
				setStore({idElement:item})
	
			
			},
		    addToFavs:()=> {
				const store = getStore()
				const newFavs = store.idElement
				setStore({favourites:[...store.favourites, newFavs]})
				
			},
			removeFav:(item)=>{
				const store = getStore();
				const updatedArray = store.favourites.filter((fav) => fav !==  item);
				setStore({ favourites: updatedArray });

			}
		}
	};
};

export default getState;
