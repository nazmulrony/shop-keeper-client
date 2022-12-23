import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <div className="w-11/12 mx-auto my-6">
                <h2 className="text-brand font-semibold text-3xl text-center">
                    Add A Product
                </h2>
                <form>
                    <div></div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
