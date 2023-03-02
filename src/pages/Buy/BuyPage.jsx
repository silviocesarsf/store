import { useEffect, useState } from "react";
import "./BuyPage.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalComp from "../../Components/Modal/ModalComp";

export default function BuyPage() {
	const [nameProduct, setNameProduct] = useState("");
	const [priceProduct, setPriceProduct] = useState(Number);
	const [photoProduct, setPhotoProduct] = useState("");
	const [textCupom, setTextCupom] = useState("");
	const [installments, setInstallments] = useState(Number);
	const [cupomDiscount, setCupomDiscount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(priceProduct);
	const navigate = useNavigate();

	const applyCupom = (e) => {
		e.preventDefault(e);
		if (textCupom.includes("SILVIO15")) {
			setCupomDiscount(priceProduct * (15 / 100));
			console.log("Cupom aplicado.");
			return;
		}
		return alert("Digite algum cupom");
	};

	const handleCupom = (e) => {
		setTextCupom(e.target.value);
	};

	useEffect(() => {
		setNameProduct(localStorage.getItem("nome_produto"));
		setPriceProduct(localStorage.getItem("preco_produto"));
		setPhotoProduct(localStorage.getItem("foto_produto"));
	}, []);

	useEffect(() => {
		setTotalPrice(priceProduct - cupomDiscount);
		setInstallments(totalPrice + (5 / 100) * totalPrice);
	}, [applyCupom]);

	return (
		<div className="container-buy_page">
			<div className="header-buy_page">
				<button onClick={() => navigate("/")} className="btn">
					Voltar
				</button>
				<p>Compra 100% segura.</p>
			</div>
			<div className="buy-page">
				<div className="left">
					<div className="product">
						<div className="photo-product">
							<img src={photoProduct} alt="" />
						</div>
						<div className="title-price">
							<h3>{nameProduct}</h3>
							<p className="bold">R$ {priceProduct}</p>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="right-wrapper">
						<div className="cupom">
							<div className="cupom-input">
								<TextField
									id="standard-basic"
									label="Cupom de desconto"
									variant="standard"
									onChange={handleCupom}
								/>
								<span>Digite o cupom de desconto</span>
							</div>
							<button onClick={applyCupom} className="btn">
								Aplicar
							</button>
						</div>
						<div className="sum-subtotal">
							<div className="subtotal">
								<p>Subtotal</p>
								<p className="bold">R$ {priceProduct}</p>
							</div>
							<div className="full-discount">
								<div className="discount">
									<p className="bold">Descontos Totais</p>
									<p className="bold">
										R$ {cupomDiscount.toFixed(2)}
									</p>
								</div>
								<div className="discount-cupom">
									<p>Desc. Cupom</p>
									<p className="bold">
										R$ - {cupomDiscount.toFixed(2)}
									</p>
								</div>
								<div className="discount-pix">
									<p>Desconto Pix</p>
									<p className="bold">R$ - 0</p>
								</div>
							</div>
						</div>
						<div className="sum-total">
							<div className="total-price">
								<h1>Total</h1>
								<h1 className="bold">
									R$ {totalPrice.toFixed(2)}
								</h1>
							</div>
							<div className="total-price_installments">
								<p>Ou parcelado em até 12x</p>
								<p className="bold">
									{" "}
									R$ {installments.toFixed(2)}
								</p>
							</div>
							<div className="button-buy-product">
								<ModalComp text={"Finalizar compra"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
