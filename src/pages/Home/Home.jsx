import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";
import { TextField } from "@mui/material";
import useDebounceSearch from "../../hooks/useDebounceSearch";

function Home() {
	const [data, setData] = useState([]);
	const [text, setText] = useState("");
	const debouncedSearch = useDebounceSearch(text);

	const handleText = (e) => {
		e.preventDefault();
		setText(e.target.value);
	};

	useEffect(() => {
		const url = `https://api.mercadolibre.com/sites/MLB/search?q=${text}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setData(response.results);
				console.log(response);
			})
			.catch((error) => console.log(error));
	}, [debouncedSearch]);

	return (
		<div className="wrapper">
			<div className="search">
				<div className="title">
					<h1>César.com</h1>
				</div>
				<div className="search">
					<TextField
						id="outlined-basic"
						label="Search"
						variant="outlined"
						onChange={handleText}
					/>
				</div>
			</div>
			<div className="list">
				{/* {!text && <span>Pesquise Algo !</span>} */}
				{data.map((item) => (
					<Card
						key={item.id}
						photo={item.thumbnail}
						title={item.title}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
