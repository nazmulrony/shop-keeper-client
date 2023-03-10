import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export type TypeProduct = {
    _id?: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
};
const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TypeProduct>();

    //image host key
    const imageHostKey = import.meta.env.VITE_imageHostKey;

    const handleAddProduct = (data: TypeProduct) => {
        const image: string = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url: string = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                const imgURL: string = imgData.data.url;
                const product: TypeProduct = {
                    name: data.name,
                    image: imgURL,
                    price: data.price,
                    quantity: data.quantity,
                };
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('Product added successfully');
                            reset();
                        }
                    });
            });
    };
    return (
        <div>
            <div className="w-11/12 mx-auto my-6">
                <h2 className="text-brand font-semibold text-3xl text-center">
                    Add A Product
                </h2>
                <form
                    onSubmit={handleSubmit(handleAddProduct)}
                    className="bg-light p-6 md:p-10 rounded-lg my-4"
                >
                    <div className="form-control w-full">
                        <label className="label">Product Name</label>
                        <input
                            {...register('name', {
                                required: 'Name is required',
                            })}
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full "
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">Add Image</label>
                        <input
                            {...register('image', {
                                required: 'image is required',
                            })}
                            type="file"
                            className="file-input file-input-bordered w-full "
                        />
                        {errors.image && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.image?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between gap-6 flex-col md:flex-row mt-2">
                        <div className="form-control w-full">
                            <label className="label">Product Price</label>
                            <input
                                {...register('price', {
                                    required: 'Price is required',
                                })}
                                type="text"
                                placeholder="Enter Price"
                                className="input input-bordered w-full "
                            />
                            {errors.price && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.price?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">Product Quantity</label>
                            <input
                                {...register('quantity', {
                                    required: 'Quantity is required',
                                })}
                                type="text"
                                placeholder="Enter Quantity"
                                className="input input-bordered w-full "
                            />
                            {errors.quantity && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.quantity?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="btn-brand hover:bg-gradient-brand2">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
