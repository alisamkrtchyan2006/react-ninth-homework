import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  login: yup.string().email("Must be a valid email").required("Login is required"),
  age: yup.number().typeError("Age must be a number").required("Age is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

export const UserForm = ({ onAddUser }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { password, ...userData } = data; 
    onAddUser(userData); 
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Surname</label>
        <input {...register("surname")} />
        {errors.surname && <p style={{color: 'red'}}>{errors.surname.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("login")} />
        {errors.login && <p style={{color: 'red'}}>{errors.login.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age")} />
        {errors.age && <p style={{color: 'red'}}>{errors.age.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

UserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};
