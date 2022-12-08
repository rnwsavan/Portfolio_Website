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
import { addcategorydata, deletecategorydata, getcategorydata, updatecategorydata } from '../../Redux/Action/category.action';

function Category_admin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [update, setUpdate] = useState('');
    const [filtercat, setfiltercat] = useState([]);
    const dispatch = useDispatch()
    const categorys = useSelector(state => state.category)
    console.log(categorys);


    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        formik.resetForm();
    };


    let category = {
        categoryname: yup.string().required('enter categoryname'),
        file: yup.mixed().required("Please Upload File")
    }

    let schema = yup.object().shape(category);

    const formik = useFormik({
        initialValues: {
            categoryname: '',
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
        dispatch(updatecategorydata(value))
        setOpen(false)
        setUpdate()
        formik.setValues()
        loadData()
    }

    const handleSubmitdata = (value) => {
        console.log(value)
        dispatch(addcategorydata(value))
        setOpen(false);
        loadData()

    }

    const loadData = () => {
        setData(categorys.category)
    }

    useEffect(
        () => {
            // loadData()
            dispatch(getcategorydata())
        },
        [])



    const columns = [

        { field: 'id', headerName: 'id', width: 130 },
        { field: 'categoryname', headerName: 'categoryname', width: 130 },
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
            categoryname: params.categoryname,
            file: params.url,
            fileName: params.fileName
        });
        // console.log(data);
    }

    const handleDelete = (id) => {
        dispatch(deletecategorydata(id))
        loadData()
        console.log(id);
    }

    const handleSearch = (val) => {
        let fdata = categorys.category.filter((d) => (
            d.id.toString().includes(val) ||
            d.categoryname.toString().toLowerCase().includes(val.toLowerCase())
        ))
        console.log(fdata);

        setfiltercat(fdata);
    }

    let fdata = filtercat.length > 0 ? filtercat : categorys.category

    // console.log(categorys.categories);


    return (
        <Box>
            <Container>
                <div>
                    <center>
                        <Button className='text-center' style={{marginTop:"100px"}} variant="outlined" onClick={() => handleClickOpen()}>
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
                        <DialogTitle>Add Category</DialogTitle>
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="categoryname"
                                        label="categoryname"
                                        name='categoryname'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.categoryname}
                                        helperText={formik.errors.categoryname}
                                        error={formik.errors.name ? true : false}

                                    />
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

export default Category_admin;