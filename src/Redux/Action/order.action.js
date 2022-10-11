import * as Actiontype from "../ActionType"

export const getorderdata = () => async (dispatch) => {

    try{
        const querySnapshot = await getDocs(collection(db, "Order"));

        let dataget = [];

        querySnapshot.forEach((doc) => {
            dataget.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: Actiontype.GET_ORDER, payload: dataget })
    }
    catch{}
    
}

export const postorder = (data) => async (dispatch) => {
    try{
        const docRef = await addDoc(collection(db, "Order"), {
            Cart: data.cartDetails,
            User: data.userDetails
        });
        dispatch({ type: Actiontype.POST_ORDER, payload: docRef })

    } catch (error) {
        console.error("Error adding document: ", error);
    }
    
}