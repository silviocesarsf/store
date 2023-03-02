import React from "react";
import "./CardComp.css";

export default function CardComp({ product }) {
	return (
		<div className="card">
			<div className="photo-card">
				<img src={product.thumbnail} alt="" />
			</div>
			<div className="col-card">
				<div className="title-card">
					<p>{product.title}</p>
				</div>
				<div className="ratings"></div>
			</div>
			<div className="price">
				<div className="old-price">
					{product.original_price ? (
						<p>
							De: <span>{product.original_price} R$</span>
						</p>
					) : null}
				</div>
				<div className="actual-price">
					{product.original_price ? (
						<h2>
							Por: <span>{product.price} R$</span>
						</h2>
					) : (
						<h2>
							<span>{product.price} R$</span>
						</h2>
					)}
				</div>
				<div className="buttons-bottom">
					<div className="button-buy">
						<button>Comprar</button>
					</div>
					<div className="button-add_to_cart">
						<button>Adicionar ao carrinho</button>
					</div>
				</div>
			</div>
		</div>
	);
}
