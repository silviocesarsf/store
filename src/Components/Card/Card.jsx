import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Card({ title, photo, price }) {

	const navigate = useNavigate()

	const saveToLocalStorage = () => {
		localStorage.setItem('nome_produto', title)
		localStorage.setItem('preco_produto', price)
		localStorage.setItem('foto_produto', photo)
		// console.log(localStorage.getItem('nome_produto'))
		// console.log(localStorage.getItem('preco_produto'))
		// console.log(localStorage.getItem('foto_produto'))
		navigate("/buy")
	}

	return (
		<div className="card">
			<div className="photo">
				<img src={photo} alt="" />
			</div>
			<div className="title">
				<p>{title}</p>
			</div>
			<div className="price">
				<p>R$ {price}</p>
			</div>
			<div className="button-buy">
				<button onClick={saveToLocalStorage}>
					Comprar
				</button>
			</div>
		</div>
	);
}
