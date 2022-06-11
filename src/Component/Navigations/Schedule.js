   
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const SignUp = () => {


	const modelSchema = yup.object().shape({
		name: yup.string().required("Please fill up this field"),
		brand: yup.string().email().required("Please fill up this field"),
		color: yup.string().required("Please fill up this field"),
        contact: yup.string().required("Please fill up this field"),
        location: yup.string().required("Please fill up this field"),
		
	});

	// const uploadImage = (e) => {
	// 	const file = e.target.files[0];
	// 	const save = URL.createObjectURL(file);
	// 	setUiImage(save);
	// 	setAvatar(file);
	// };

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(modelSchema),
	});

	const onHandleSubmit = handleSubmit(async (data) => {
		const { name, location, color, contact, brand } = data;

		// const formData = new FormData();

		// formData.append("name", userName);
		// formData.append("email", email);
		// formData.append("password", password);
		// formData.append("avatar", avatar);

		// const config = {
		// 	headers: {
		// 		"content-type": "multipart/form-data",
		// 	},
		// };

		// const url = "http://localhost:4444/api/user/register";

		// await axios.post(url, formData, config);

		reset();
	});

	return (
		<Container>
			<Wrapper>
                
				<Card onSubmit={onHandleSubmit}>
				
						<h2>Send A Request</h2>
					<Holder>
					
						<Hold>
							<DivError>{errors.userName && errors?.userName.message}</DivError>
							<TextInput placeholder=" Your Name" {...register("name")} />
						</Hold>

						<Hold>
							<DivError>{errors.email && errors?.email.message}</DivError>
							<TextInput placeholder="Mercedes Brand" {...register("brand")} />
						</Hold>
                        
                        <Hold>
							<DivError>{errors.email && errors?.email.message}</DivError>
							<TextInput placeholder="Mercedes Color" {...register("color")} />
						</Hold>
			
						<Hold>
							<DivError>{errors.confirm && errors?.confirm.message}</DivError>
							<TextInput placeholder="Current Location" {...register("location")} />
						</Hold>

                        <Hold>
							<DivError>{errors.email && errors?.email.message}</DivError>
							<TextInput placeholder="Contact" {...register("contact")} />
						</Hold>
					</Holder>

                    

					<Holder>
						<a href = "mailto:anoziechiderasilverlin@gmail.com">Send Email</a>
					
					</Holder>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default SignUp;

const Hold = styled.div`
	width: 100%;
`;
const DivError = styled.p`
	margin: 0px;
	color: red;
	font-size: 12px;
	margin-top: 12px;
`;

const Account = styled.div`
	text-align: center;
	margin-top: 20px;
`;
const Div = styled(Link)`
	font-weight: bold;
	color: black;
	text-decoration: none;
`;

const Button = styled.button`
	justify-content: center;
	align-items: center;
	display: flex;
	width: 100%;
	background-color: #EF4D39;
	height: 50px;
	outline: none;
	border: 0;
	color: white;
	font-size: 25px;
	font-weight: bold;
	text-transform: uppercase;
	transform: scale(1);
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const TextInput = styled.input`
	width: 100%;
	height: 45px;
	border-radius: 5px;
	border: 1px solid silver;
	outline: none;
	font-size: 16px;
	padding-left: 10px;
	::placeholder {
		font-family: Poppins;
	}
`;

const Holder = styled.div`
	width: 80%;
	margin-top: 40px;
	padding: 0 10px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;

	a{
		justify-content: center;
	align-items: center;
	display: flex;
	width: 100%;
	background-color: #EF4D39;
	height: 50px;
	outline: none;
	border: 0;
	color: white;
	font-size: 25px;
	font-weight: bold;
	text-transform: uppercase;
	transform: scale(1);
	transition: all 350ms;
	text-decoration: none;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
	}
`;




const Card = styled.form`
	width: 500px;
	min-height: 500px;
	height: 100%;
	background-color: white;
	border-radius: 10px;
	padding: 30px 0;
	align-items: center;
	display: flex;
	flex-direction: column;

	h2{
		color:#EF4D39;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
`;

const Container = styled.div`
	padding-top: 150px;
	min-height: calc(100vh - 100px);
	height: 100%;
	background-color: lightgrey;
`;
