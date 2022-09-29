import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "cardReducer",
    initialState: {
        items: [
            {
                id: Math.random(),
                display: false,
                name: "Doger",
                img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
            },
            {
                id: Math.random(),
                display: false,
                name: "Pokemon",
                img: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
            },
            {
                id: Math.random(),
                display: false,
                name: "Pokemon",
                img: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
            },
            {
                id: Math.random(),
                display: false,
                name: "Doger",
                img: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
            },
        ],
        cards: []
    },
    reducers: {
        selectItem: (state, action) => {
            const { id, display, img, item } = action.payload
            const i = state.items.findIndex(item => item.id === id);
            state.items[i].display = !state.items[i].display;

          

        },
    }
});
export const { selectItem } = cardSlice.actions;
export default cardSlice.reducer;

/* 
Reducer ile
Entity ile
paralel Markdown
Paralel React JS kursu

*/