import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import dbaxios from '../../../utils/axios'
import axios from 'axios'
export default function CreateService() {

    const { register, handleSubmit } = useForm();

    const [confirm, setConfirm] = useState(false)
    const [imgurl, setImgUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            img: imgurl,
            price: data.price
        }
        postData(eventData)
    }

    const postData = (data) => {
        dbaxios.post('/admin/service/create', data)
        setConfirm(true)
    }
    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', '15360fd2234e5a7504e9de51f7adc5d9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setImgUrl(response.data.data.url_viewer)
            }
            )
            .catch((err) => console.log(err))
    }

    return confirm ? (
        <Redirect to="/admin/services"></Redirect>
    ) : (
            <div className="container-fluid bg-light p-5">
                <form className="mt-5 p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label for="Service"> Service Name</label>
                        <input type="text" className="form-control" id="Service" placeholder="Enter Title" {...register("name")} />
                    </div>
                    <br />
                    <div className="col-md-6">
                        <label for="price">Service Price</label>
                        <input type="number" className="form-control" id="price" placeholder="Enter Price" {...register("price")} />
                    </div>
                    <br />
                    <div className="col-md-6">
                        <label className="form-label" for="customFile">File Upload</label>
                        <input type="file" className="form-control" id="customFile" {...register("img")} onChange={handleImage} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
}