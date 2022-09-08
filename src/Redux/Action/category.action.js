import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import * as ActionTypes from "../ActionType"
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";

export const getcategorydata = (data) => async (dispatch) => {
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.GET_CATOGORIES, payload: data })

    } catch (error) {
        dispatch(errorcategory(error))
        console.log(error);
    }
}




export const addcategorydata = (data) => async (dispatch) => {
    // console.log(data);
    try {
        let imagestr = Math.floor(Math.random() * 100000).toString();
        const Category = ref(storage, 'categories/' + imagestr);

        uploadBytes(Category, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const CategorysRef = await addDoc(collection(db, "categories"), {
                            categories: data.categories,
                            price: data.price,
                            categoryname: data.categoryname,
                            url: url,
                            fileName: imagestr
                        }
                        );
                        dispatch({
                            type: ActionTypes.ADD_CATOGORIES, payload: {
                                id: CategorysRef.id,
                                categories: data.categories,
                                price: data.price,
                                categoryname: data.categoryname,
                                url: url,
                                fileName: imagestr
                            }
                        })
                    });
            });


        // const Category = await addDoc(collection(db, "product"), data);
        // console.log("Document written with ID: ", Category.id);
        // dispatch({ type: ActionTypes.ADD_CATOGORIES, payload: { id: Category.id, ...data } })

    } catch (error) {
        dispatch(errorcategory(error.message))
        console.error("Error adding document: ", error);
    }
}

export const updatecategorydata = (data) => async (dispatch) => {
    console.log(data);
    try {
        const Categoryedit = doc(db, "categories", data.id);
        if (typeof data.file === "string") {
            console.log("only data");
            await updateDoc(Categoryedit, {
                categories: data.categories,
                price: data.price,
                categoryname: data.categoryname,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPDATE_CATOGORIES, payload: data })
        } else {
            // console.log("image with");
            const Categorydel = ref(storage, 'categories/' + data.fileName);

            deleteObject(Categorydel).then(async () => {

                let imagestr = Math.floor(Math.random() * 100000).toString();
                const Category = ref(storage, 'categories/' + imagestr);

                uploadBytes(Category, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(Categoryedit, {
                                    categories: data.categories,
                                    price: data.price,
                                    categoryname: data.categoryname,
                                    url: url,
                                    fileName: imagestr
                                });
                                dispatch({
                                    type: ActionTypes.UPDATE_CATOGORIES, payload: {
                                        ...data, url: url,
                                        fileName: imagestr
                                    }
                                })
                            })
                    })
            })
        }

    } catch (error) {
        dispatch(errorcategory(error.message));
    }
}


export const deletecategorydata = (data) => async (dispatch) => {
console.log(data)
    try {
        const desertRef = ref(storage, 'categories/' + data.fileName);
        deleteObject(desertRef).then(async () => {
            await deleteDoc(doc(db, "categories", data.id));
            dispatch({ type: ActionTypes.DELETE_CATOGORIES, payload: data.id })
        }).catch((error) => {
            dispatch(errorcategory(error.message));
        });

    } catch (error) {
        dispatch(errorcategory(error.message));
    }
}




export const errorcategory = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CATOGORIES, payload: error })
}
