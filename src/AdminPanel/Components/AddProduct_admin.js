import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { addproductdata, deleteproductdata, getproductdata, updateproductdata } from '../../Redux/Action/product.action';
import { getcategorydata } from '../../Redux/Action/category.action';
import app from '../../App.css'

function AddProduct_admin(props) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])
    const [update, setUpdate] = useState('');
    const [category, setCategory] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const products = useSelector(state => state.product)
    const categorydata = useSelector(state => state.category)
    // console.log(categorydata.category);
    const dispatch = useDispatch()



    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        formik.resetForm();
    };


    let product = {
        productname: yup.string().required('enter productname'),
        price: yup.string().required('enter producPrice'),
        category: yup.string().required('enter productCategory'),
        file: yup.mixed().required("Please Upload File")
    }

    let schema = yup.object().shape(product);

    const formik = useFormik({
        initialValues: {
            productname: '',
            price: '',
            category: '',
            file: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            console.log(value)
            if (update) {
                handleupdate(value)
            } else {
                handleSubmitdata(value)
            }
            resetForm();
        }
    })

    const handleupdate = (value) => {
        console.log(value)
        dispatch(updateproductdata(value))
        setOpen(false)
        setUpdate()
        formik.setValues()
        loadData()
    }

    const handleSubmitdata = (value) => {
        console.log(value)
        dispatch(addproductdata(value))
        setOpen(false);
        loadData()

    }

    const loadData = () => {
        setData(categorydata.category)
    }


    const columns = [

        { field: 'id', headerName: 'id', width: 130 },
        { field: 'productname', headerName: 'productname', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        { field: 'category', header: 'categoryname', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'url', headerName: 'Image', width: 130,
            renderCell: (params) => (
                <>
                    <img src={params.row.url} width={50} height={50} />
                </>
            )
        }
    ];

    const handleEdit = (params) => {
        console.log(params);
        setOpen(true);
        setUpdate(true);
        formik.setValues({
            ...params,
            productname: params.productname,
            price: params.price,
            category: params.category,
            file: params.url,
            fileName: params.fileName
        });
        // console.log(data);
    }

    const handleDelete = (id) => {
        dispatch(deleteproductdata(id))
        loadData()
        console.log(id);
    }

    const handleSearch = (val) => {
        let fdata = products.product.filter((d) => (
            d.id.toString().includes(val) ||
            d.price.toString().includes(val) ||
            d.category.toString().includes(val) ||
            d.productname.toString().toLowerCase().includes(val.toLowerCase())
        ))
        console.log(fdata);

        setfilterdata(fdata);
    }

    useEffect(
        () => {
            loadData()
            dispatch(getproductdata())
            dispatch(getcategorydata())
            setCategory(categorydata.category)
            console.log(categorydata.category);
        },
        [])
    // console.log(category);
    let fdata = filterdata.length > 0 ? filterdata : products.product;
    let finalData = category.length > 0 ? category : categorydata.category;

    console.log(formik.errors);

    return (
        <Box>
            <Container>
                <div>
                    <center>
                        <Button className='text-center' variant="outlined" onClick={() => handleClickOpen()}>
                            ADD
                        </Button>
                    </center>
                    <div>
                        <TextField
                            margin="dense"
                            id="search"
                            label="search"
                            type="search"
                            fullWidth
                            variant="standard"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={fdata}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Product</DialogTitle>
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="productname"
                                        label="productname"
                                        name='productname'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.productname}
                                        helperText={formik.errors.productname}
                                        error={formik.errors.name ? true : false}

                                    />

                                    <TextField
                                        margin="dense"
                                        id="price"
                                        label="price"
                                        name='price'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        helperText={formik.errors.price}
                                        error={formik.errors.price ? true : false}

                                    />
                                    <select 
                                    name='category' 
                                    className='mt-3 mb-3' 
                                    onChange={formik.handleChange}>
                                        <option>Select Category</option>
                                        {
                                           finalData.map((values) => {
                                                const { id , categoryname } = values;
                                                return(
                                                    <option value={categoryname}>{categoryname}</option>
                                                )
                                            })
                                        }
                                    </select>
                                   
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        variant="standard"
                                        onChange={e => formik.setFieldValue('file', e.target.files[0])}
                                    />
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        {
                                            update ?
                                                <Button type="submit">Update</Button>
                                                :
                                                <Button type="submit">Submit</Button>
                                        }
                                    </DialogActions>
                                </DialogContent>

                            </Form>
                        </Formik>
                    </Dialog>
                </div>
            </Container>
        </Box>
    );
}

export default AddProduct_admin;