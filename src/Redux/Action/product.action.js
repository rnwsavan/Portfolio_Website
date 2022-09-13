import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import * as ActionTypes from "../ActionType"
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";

export const getproductdata = (data) => async (dispatch) => {
    try {
        let data = []

        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        })

        dispatch({ type: ActionTypes.GET_PRODUCTS, payload: data })

    } catch (error) {
        dispatch(errorproduct(error))
        console.log(error);
    }
}




export const addproductdata = (data) => async (dispatch) => {
    // console.log(data);
    try {
        let imagestr = Math.floor(Math.random() * 100000).toString();
        const product = ref(storage, 'Products/' + imagestr);

        uploadBytes(product, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const productsRef = await addDoc(collection(db, "Products"), {
                            productname: data.productname,
                            price: data.price,
                            category: data.category,
                            url: url,
                            fileName: imagestr
                        }
                        );
                        dispatch({
                            type: ActionTypes.ADD_PRODUCTS, payload: {
                                id: productsRef.id,
                                productname: data.productname,
                                price: data.price,
                                category: data.category,
                                url: url,
                                fileName: imagestr
                            }
                        })
                    });
            });


        // const product = await addDoc(collection(db, "product"), data);
        // console.log("Document written with ID: ", product.id);
        // dispatch({ type: ActionTypes.ADD_CATOGORIES, payload: { id: product.id, ...data } })

    } catch (error) {
        dispatch(errorproduct(error.message))
        console.error("Error adding document: ", error);
    }
}

export const updateproductdata = (data) => async (dispatch) => {
    console.log(data);
    try {
        const productedit = doc(db, "Products", data.id);
        if (typeof data.file === "string") {
            console.log("only data");
            await updateDoc(productedit, {
                productname: data.productname,
                price: data.price,
                category: data.category,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPDATE_PRODUCTS, payload: data })
        } else {
            // console.log("image with");
            const productdel = ref(storage, 'Products/' + data.fileName);

            deleteObject(productdel).then(async () => {

                let imagestr = Math.floor(Math.random() * 100000).toString();
                const product = ref(storage, 'Products/' + imagestr);

                uploadBytes(product, data.file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                await updateDoc(productedit, {
                                    productname: data.productname,
                                    price: data.price,
                                    category: data.category,
                                    url: url,
                                    fileName: imagestr
                                });
                                dispatch({
                                    type: ActionTypes.UPDATE_PRODUCTS, payload: {
                                        ...data, url: url,
                                        fileName: imagestr
                                    }
                                })
                            })
                    })
            })
        }

    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}


export const deleteproductdata = (data) => async (dispatch) => {
    console.log(data)
    try {
        const desertRef = ref(storage, 'Products/' + data.fileName);
        deleteObject(desertRef).then(async () => {
            await deleteDoc(doc(db, "Products", data.id));
            dispatch({ type: ActionTypes.DELETE_PRODUCTS, payload: data.id })
        }).catch((error) => {
            dispatch(errorproduct(error.message));
        });

    } catch (error) {
        dispatch(errorproduct(error.message));
    }
}




export const errorproduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_PRODUCTS, payload: error })
}
