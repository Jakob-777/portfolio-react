
import React, { useState } from "react";
import "./ContactPage.css";


const Contact = () => {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Hier kannst du später z.B. eine API callen
		alert("Danke für deine Nachricht!");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<main className="section">
			<div className="container contact-container">
				<h1 className="title-1">Contact</h1>

				<form onSubmit={handleSubmit} className="contact-form">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>

					<label htmlFor="message">Massage</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>

					<button type="submit">Submit</button>
				</form>

			</div>
		</main>
	);
}

export default Contact
